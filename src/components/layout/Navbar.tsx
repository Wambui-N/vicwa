"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import menuAnimation from "../../../public/menuAnimation.json";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Button from "../Button";

// Define menu links
const menuLinks = [
  { path: "/", label: "Home" },
  { path: "#", label: "Projects" },
  { path: "#", label: "About" },
  { path: "#", label: "Services" },
];

// Logo Component
const Logo = () => (
  <Link href="/">
    <Image src="/Logo.svg" alt="logo" width={100} height={100} />
  </Link>
);

// Menu Component for Desktop
const Menu = () => (
  <ul className="w-full flex flex-row">
    {menuLinks.map((link, index) => (
      <li className="text-brown px-4 font-medium" key={index}>
        <Link href={link.path}>{link.label}</Link>
      </li>
    ))}
  </ul>
);
// Mobile Menu Component
const MobileMenu = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) => (
  <motion.div
    animate={{ x: isOpen ? "0" : "100%" }}
    transition={{ ease: "linear", duration: 1 }}
    className="absolute left-0 top-0 flex flex-col items-center justify-around h-screen w-screen bg-white shadow-lg"
  >
    <ul className="">
      {menuLinks.map((link, index) => (
        <li
          className="text-brown text-center uppercase text-2xl font-medium list-none py-2"
          key={index}
          onClick={toggleMenu}
        >
          <Link href={link.path}>{link.label}</Link>
        </li>
      ))}
    </ul>
    <div onClick={toggleMenu} className="flex items-center justify-center">
      <Button variant="secondary">Get in touch</Button>
    </div>
  </motion.div>
);

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<any>(null); 
  const [hidden, setHidden] = useState(false);
  const toggleMenu = () => {
    if (menuRef.current && 'playSegments' in menuRef.current) {
      isOpen ? menuRef.current.playSegments([40, 0], true) : menuRef.current.playSegments([0, 40], true);
    }
    setIsOpen(!isOpen);
  };

  // Handle scroll for hiding navbar
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined) {
      setHidden(latest > previous && latest > 200);
    }
  });

  return (
    <motion.div
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="sticky w-full bg-white py-6 shadow top-0 z-50"
    >
      <div className="flex flex-row justify-between items-center responsive">
        <div className="object-cover z-30">
          <Logo />
        </div>
        <div className="max-lg:hidden">
          <Menu />
        </div>
        <div className="max-lg:hidden">
          <Button variant="primary">Get in touch</Button>
        </div>
        <div className="lg:hidden relative z-30" onClick={toggleMenu}>
          <Lottie
            className="h-20 p-0"
            lottieRef={menuRef}
            animationData={menuAnimation}
            autoplay={false}
            loop={false}
          />
          <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
