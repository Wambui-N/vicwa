import About from "@/sections/About";
import Approach from "@/sections/Approach";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import { WhyUs } from "@/sections/WhyUs";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <WhyUs />
      <Services />
      <Approach />
    </main>
  )
}
