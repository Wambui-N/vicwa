import SectionTitle from "@/components/SectionTitle";
import WhyUsPoint from "@/components/WhyUsPoint";
import React from "react";

const whyUsPoints = [
  {
    image: "/Experience.png",
    title: "Expertise & Experiences",
    description:
      "With over five years in the game, our skilled team knows how to tackle any plumbing challenge that comes our way.",
  },
  {
    image: "/quality.png",
    title: "Quality Assuarance",
    description:
      "High-quality materials and eco-friendly solutions ensure sustainable and durable results.",
  },
  {
    image: "/Tailored sln.png",
    title: "Tailored Solutions",
    description:
      "We take the time to understand your unique needs and provide customized solutions just for you.",
  },
  {
    image: "/247.png",
    title: "24/7 Support",
    description: "Always available for emergency services or support.",
  },
];

export const WhyUs = () => {
  return (
    <div id="why-choose-us" className="responsive py-8">
      <SectionTitle title="Why Choose Us?" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        {whyUsPoints.map((points, index) => (
          <WhyUsPoint
            key={index}
            style={index % 2 === 0 ? "flex-col" : "flex-col sm:flex-col-reverse"}
            image={points.image}
            title={points.title}
            description={points.description}
            descColor={index % 2 === 0 ? "bg-orange/10" : "bg-green/10"}
          />
        ))}
      </div>
    </div>
  );
};