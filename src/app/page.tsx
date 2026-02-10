import About from "@/components/About";
import Comparison from "@/components/Comparison";
import Hero from "@/components/Hero";
import Technology from "@/components/Technology";

export default function Home() {
  return (
    <div className="">
      <Hero /> <About />
      <Technology />
      <Comparison />
    </div>
  );
}
