import Image from 'next/image'
import React from 'react'

interface AboutSectionProps {
    style?: string;
    image: string;
    children: React.ReactNode;
}

const AboutSection = ({ style, image, children }: AboutSectionProps) => {
  return (
    <div>
        <div className={`flex lg:flex-row flex-col items-center gap-6 ${style}`}>
          <div className="h-auto basis-1/4">
            <Image
              className="object-cover rounded-lg"
              src={image}
              alt="about"
              width={300}
              height={300}
            />
          </div>
          <div className="h-full basis-3/4 flex flex-col justify-center gap-4">
            {children}
          </div>
        </div>
    </div>
  )
}

export default AboutSection