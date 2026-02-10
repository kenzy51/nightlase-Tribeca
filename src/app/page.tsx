import About from "@/components/About";
import Comparison from "@/components/Comparison";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/faq";
import Hero from "@/components/Hero";
import Technology from "@/components/Technology";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="">
      <Hero /> <About />
      <Technology />
      <Comparison />
      <Testimonial />
      <FAQ />
      <ContactForm />
    </div>
  );
}
