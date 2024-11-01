import Button from "@/components/Button";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero-img bg-cover bg-center bg-no-repeat h-[80vh]">
      <div className="h-full bg-gradient-to-tr from-green via-green/50 to-transparent">
        <div className="responsive h-full lg:py-24 py-12 flex flex-col justify-end">
          <div className="h-auto lg:w-[50vw] w-full flex flex-col gap-4">
            <h1 className="text-white">
              Sustainable Plumbing Solutions for Reliable, Safe, and Efficient
              Systems
            </h1>
            <p className="text-white text-xl">
              At Vicwa Plumbing Supplies and Solutions, we pride ourselves on
              delivering quality solutions that ensure the seamless flow of
              water and waste systems.
            </p>
            <div className="py-4">
              <Button href="#services" variant="primary">
                Explore our services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
