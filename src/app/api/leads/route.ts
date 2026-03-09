// app/api/leads/route.ts
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, lang } = body;
    const cleanPhone = `+1${phone.replace(/\D/g, "").slice(-10)}`;

    const [ghlResponse, seebResponse] = await Promise.all([
      fetch("https://services.leadconnectorhq.com/contacts/upsert", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GHL_PRIVATE_TOKEN}`,
          "Content-Type": "application/json",
          Version: "2021-07-28",
        },
        body: JSON.stringify({
          firstName, lastName, email, phone: cleanPhone,
          locationId: process.env.GHL_LOCATION_ID,
          tags: ["NightLase Landing Page", lang === "es" ? "Spanish" : "English"],
          source: "Nightlase"
        }),
      }),
      fetch("https://api.seeb.ai/api/v1/webhook/outbound/69af061e58aab2a9bc38780b", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json", 
          "X-Seeb-Secret": process.env.SEEB_AI_PASSWORD! 
        },
        body: JSON.stringify({
          data: [{ 
            first_name: firstName, 
            last_name: lastName, 
            phone_number: cleanPhone, 
            email, 
            description: "Nightlase" 
          }]
        }),
      })
    ]);

    if (!ghlResponse.ok) {
      console.error("GHL Failed:", await ghlResponse.text());
    }
    if (!seebResponse.ok) {
      console.error("Seeb.ai Failed:", await seebResponse.text());
    }

    return NextResponse.json({ 
      success: ghlResponse.ok && seebResponse.ok,
      details: { ghl: ghlResponse.ok, seeb: seebResponse.ok }
    });

  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}