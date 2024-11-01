import About from "@/sections/About";
import Approach from "@/sections/Approach";
import ContactForm from "@/sections/ContactForm";
import Faqs from "@/sections/Faqs";
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
      <Faqs />
      <ContactForm />
    </main>
  )
}
