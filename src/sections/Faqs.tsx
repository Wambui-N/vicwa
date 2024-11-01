import AccordionComponent from "@/components/AccordionComponent";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

const accordionItems = [
  {
    title: "What types of projects does VicWa handle?",
    content: (
      <p>
        We handle residential and commercial projects, including piping,
        biodigester installations, and borehole connections, tailored to meet
        each client&apos;s needs.
      </p>
    ),
  },
  {
    title: "Do you provide support after installation?",
    content: (
      <p>
        Yes, we offer maintenance and support, including check-ups for
        installations like boreholes and biodigesters.
      </p>
    ),
  },
  {
    title: "Can you help with water conservation for agriculture?",
    content: (
      <p>
        Absolutely. Our drip irrigation systems are designed to conserve water
        while providing efficient irrigation for crops and landscaping.
      </p>
    ),
  },{
    title: "How quickly can VicWa respond to an emergency repair?",
    content: (
      <p>
        We offer 24/7 service availability for emergency repairs, ensuring quick and efficient response times to minimize water loss, property damage, and service disruption.
      </p>
    ),
  },
];

const Faqs = () => {
  return (
    <div id="faqs" className="responsive">
      <SectionTitle title="FAQs" />
      <div className="section-padding">
        <AccordionComponent items={accordionItems} allowMultiple={false} />
      </div>
    </div>
  );
};

export default Faqs;
