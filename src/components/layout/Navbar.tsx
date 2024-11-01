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
  <Link href="/" className="block w-[80px] md:w-[100px]">
    <Image src="/Logo.svg" alt="logo" width={100} height={100} priority />
  </Link>
);

// Menu Component for Desktop
const Menu = () => (
  <nav>
    <ul className="flex flex-row items-center gap-6">
      {menuLinks.map((link, index) => (
        <li className="text-brown hover:text-orange transition-colors" key={index}>
          <Link href={link.path} className="font-medium">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

// Mobile Menu Component
const MobileMenu = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) => {
  const menuVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      }
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 30,
      }
    }
  };

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center"
    >
      <nav className="flex flex-col items-center gap-8">
        <ul className="flex flex-col items-center gap-6">
          {menuLinks.map((link, index) => (
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ delay: index * 0.1 }}
              className="text-brown text-center text-2xl font-medium"
              key={index}
            >
              <Link href={link.path} onClick={toggleMenu}>
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
          transition={{ delay: menuLinks.length * 0.1 }}
        >
          <Button variant="secondary" onClick={toggleMenu}>
            Get in touch
          </Button>
        </motion.div>
      </nav>
    </motion.div>
  );
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<any>(null);
  const [hidden, setHidden] = useState(false);
  
  const toggleMenu = () => {
    if (menuRef.current && 'playSegments' in menuRef.current) {
      isOpen 
        ? menuRef.current.playSegments([40, 0], true) 
        : menuRef.current.playSegments([0, 40], true);
    }
    setIsOpen(!isOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle scroll for hiding navbar
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && !isOpen) {
      setHidden(latest > previous && latest > 200);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 w-full bg-white shadow-md z-50"
    >
      <div className="responsive py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden lg:flex items-center gap-8">
            <Menu />
            <Button variant="primary">Get in touch</Button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="relative z-50 w-12 h-12 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <Lottie
                lottieRef={menuRef}
                animationData={menuAnimation}
                autoplay={false}
                loop={false}
              />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </motion.header>
  );
};

export default Navbar;