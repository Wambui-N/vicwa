import Image from "next/image";
import React from "react";

interface WhyUsPointProps {
  style?: string;
  image: string;
  title: string;
  description: string;
  descColor: string;
}

const WhyUsPoint = ({
  style,
  image,
  title,
  description,
  descColor = "bg-orange/10",
}: WhyUsPointProps) => {
  return (
    <div className={`flex ${style} gap-4 h-[70vh] overflow-hidden`}>
      <Image
        className="basis-1/2 w-full h-full object-center object-cover rounded-lg"
        src={image}
        alt="Experience"
        width={300}
        height={300}
      />
      <div
        className={`basis-1/2 w-full h-full ${descColor} flex flex-col justify-between p-6 rounded-lg`}
      >
        <h6>{title}</h6>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

export default WhyUsPoint;
