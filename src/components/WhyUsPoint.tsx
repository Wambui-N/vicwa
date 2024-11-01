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
    <div className={`flex ${style} gap-4 min-h-[320px] lg:min-h-[400px] w-full`}>
      <div className="relative w-full h-40 md:h-48 lg:h-52">
        <Image
          className="rounded-lg object-cover object-bottom"
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority
        />
      </div>
      <div
        className={`w-full flex-1 ${descColor} flex flex-col justify-between p-4 md:p-6 rounded-lg`}
      >
        <h6 className="text-lg md:text-xl font-semibold mb-2">{title}</h6>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default WhyUsPoint;