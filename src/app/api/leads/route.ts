import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, lang } = body;

    const cleanPhone = `+1${phone.replace(/\D/g, "").slice(-10)}`;

    const ghlRequest = fetch(
      "https://services.leadconnectorhq.com/contacts/upsert",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GHL_PRIVATE_TOKEN}`,
          "Content-Type": "application/json",
          Version: "2021-07-28",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone: cleanPhone,
          locationId: process.env.GHL_LOCATION_ID,
          tags: [
            "NightLase Landing Page",
            lang === "es" ? "Spanish" : "English",
          ],
          source: "Nightlase",
        }),
      },
    );
    const tdsRequest = fetch(
      "https://tds-leads.vercel.app/api/nightlase-leads",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [
            {
              first_name: firstName,
              last_name: lastName,
              phone_number: cleanPhone,
            },
          ],
        }),
      },
    );

    const [ghlResponse, tdsResponse] = await Promise.all([tdsRequest, ghlRequest]);
    // 3. Check for errors
    if (!ghlResponse.ok) {
      const ghlData = await ghlResponse.json();
      return NextResponse.json(
        { error: ghlData.message || "GHL API Error" },
        { status: ghlResponse.status },
      );
    }

    if (!tdsResponse.ok) {
      return NextResponse.json(
        { error: "TDS API Error" },
        { status: tdsResponse.status },
      );
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
