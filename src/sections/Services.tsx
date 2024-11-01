"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Lenis from 'lenis'

const services = [
  {
    image: "/piping.png",
    title: "Waste and Soil Piping",
    description:
      "We specialize in the expert installation and maintenance of waste and soil piping systems that meet the highest safety and quality standards. Our solutions ensure proper waste flow, reducing the risk of leaks and blockages.",
  },
  {
    image: "/fitting.png",
    title: "Plumbing Fittings",
    description:
      "We supply and fit a wide range of plumbing materials, ensuring long-lasting and reliable connections for various plumbing systems. Our quality fittings are designed to prevent leaks and ensure durability.",
  },
  {
    image: "/Experience.png",
    title: "Biodigester Installation",
    description:
      "Our team installs biodigester systems that provide environmentally friendly waste disposal solutions. These systems effectively reduce pollution and eliminate the need for septic tanks, making them a sustainable choice for waste management.",
  },
  {
    image: "/tap repair.jpg",
    title: "Water Fault Repairs",
    description:
      "We offer fast and efficient repairs for water faults, leaks, and blockages, minimizing downtime and water loss for your home or business. Our skilled plumbers are ready to tackle any issue, big or small.",
  },
  {
    image: "/borehole.jpg",
    title: "Borehole Connection",
    description:
      "From drilling to final connection, we provide comprehensive borehole installation and maintenance services. This ensures a reliable water supply, even in remote areas where access to municipal water is limited.",
  },
  {
    image: "/drip irrigation.jpg",
    title: "Drip Irrigation Systems",
    description:
      "We design and install drip irrigation systems that conserve water while providing efficient irrigation for agricultural and landscaping needs. Our solutions help you save water and ensure healthy plant growth.",
  },
];

const Services = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageContainerRef = useRef(null);

  // Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


  const serviceRefs = useRef(
    services.map(() => React.createRef<HTMLDivElement>())
  );
  const isInViewArray = serviceRefs.current.map((ref) =>
    useInView(ref, { amount: 0.5, margin: "-100px 0px 0px 0px" })
  );

  // Update current image index based on in-view state
  useEffect(() => {
    const inViewIndex = isInViewArray.findIndex((inView) => inView);
    if (inViewIndex >= 0 && inViewIndex !== currentImageIndex) {
      setCurrentImageIndex(inViewIndex);
    }
  }, [isInViewArray, currentImageIndex]);

  return (
    <div className="responsive">
      <div className="section-padding">
        <div className="flex flex-row gap-12">
          {/* Services List */}
          <div className="basis-1/2 flex flex-col">
            {services.map((service, index) => (
              <motion.div
                ref={serviceRefs.current[index]}
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInViewArray[index] ? 1 : 0, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="py-12 flex flex-col justify-between gap-12"
              >
                <div className="flex flex-col gap-6">
                  <div className="w-8 h-8 rounded-full bg-green flex items-center justify-center text-sm text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Sticky Image */}
          <div
            ref={imageContainerRef}
            className="basis-1/2 sticky right-0 top-[100px] h-full py-12"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Image
                  className="w-full h-[300px] object-cover rounded-lg"
                  src={services[currentImageIndex].image}
                  alt={services[currentImageIndex].title}
                  width={300}
                  height={300}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
