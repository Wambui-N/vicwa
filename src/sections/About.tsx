import AboutSection from "@/components/AboutSection";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

const About = () => {
  return (
    <div className="responsive py-8">
      <SectionTitle title="Leading the Way in Construction and Plumbing Since 2019" />
      <div className="section-padding flex flex-col gap-8">
        <AboutSection
          image="/About 1.jpeg"
          children={
            <>
              <p>
                Since 2019, we&apos;ve been passionate about providing
                top-quality plumbing services for both residential and
                commercial clients.
              </p>
              <p>
                <b>Our mission is simple:</b>
                to keep your water flowing smoothly and your waste systems
                running efficiently.
              </p>
              <p>
                With a dedicated team of skilled professionals,
                <b>
                  we blend years of industry expertise with eco-friendly
                  practices
                </b>{" "}
                to offer solutions that not only meet your needs but also
                contribute to a more sustainable future.
              </p>
            </>
          }
        />
        <AboutSection
          style="lg:flex-row-reverse flex-row"
          image="/About 2.jpeg"
          children={
            <>
              <p>
                At Vicwa Plumbing Supplies and Solutions, we understand that
                plumbing issues can be stressful and disruptive. That&apos;s why
                we pride ourselves on being
                <b>responsive and customer-focused.</b>
              </p>
              <p>
                Whether you need <b>quick repairs</b> ,{" "}
                <b>expert installations</b>, or
                <b> innovative systems like biodigesters and drip irrigation</b>
                , we&apos;re here to guide you through every step of the
                process.
              </p>
              <p>
                <b>Your satisfaction is our top priority,</b> and we take pride
                in exceeding your expectations with every project. Let us help
                you find the best plumbing solutions for your home or business!
              </p>
            </>
          }
        />
      </div>
    </div>
  );
};

export default About;
