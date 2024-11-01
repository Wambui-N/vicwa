import ApproachItem from "@/components/ApproachItem";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

const approachData = [
  {
    id: 1,
    title: "High Quality Materials",
    description:
      "We only use durable, top-quality materials in every project, ensuring lasting results.",
  },
  {
    id: 2,
    title: "Eco-friendly Solutions",
    description:
      "Sustainability is at the heart of what we do, whether it's through water-saving irrigation systems or energy-efficient construction techniques.",
  },
  {
    id: 3,
    title: "Skilled Team",
    description:
      "Our team consists of highly trained and certified professionals with extensive experience in both construction and plumbing industries.",
  },
  {
    id: 4,
    title: "Client Satisfaction",
    description:
      "Every project is completed with a focus on exceeding client expectations, both in service delivery and the final outcome.",
  },
];

const Approach = () => {
  return (
    <div id="approach" className="responsive">
      <SectionTitle title="Our Approach" />
      <div className="section-padding">
        <p>
          At Vicwa, we put our clients first. From the initial consultation to
          the final project handover, our team works hand-in-hand with you to
          understand your unique requirements and tailor solutions accordingly.
          Our approach combines:
        </p>
        <div className="grid lg:grid-rows-2 grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 py-6">
          {approachData.map((approach) => (
            <ApproachItem
              key={approach.id}
              title={approach.title}
              description={approach.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Approach;
