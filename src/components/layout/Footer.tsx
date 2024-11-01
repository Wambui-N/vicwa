"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Why Choose Us", href: "#why-choose-us" }, // Fixed typo from "lable" to "label"
      { label: "Our Services", href: "#services" },
      { label: "Our Approach", href: "#approach" }, // Fixed typo from "Aproach" to "Approach"
      { label: "FAQs", href: "#faqs" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-green/10 pt-16 pb-8">
      <div className="responsive">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Logo and Description */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="block w-[100px]">
              <Image
                src="/Logo.svg"
                alt="Vicwa Logo"
                width={100}
                height={100}
                className="mb-4"
              />
            </Link>
            <h6 className="text-sm text-gray-600 max-w-xs">
              Vicwa Plumbing Supplies and Solutions
            </h6>
            <p className="text-sm text-gray-600 max-w-xs">
              Quality service since 2019.
            </p>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h6 className="font-semibold text-lg mb-4">{section.title}</h6>
              <ul className="space-y-3">
                <li>
                  <div
                    className="cursor-pointer font-semibold"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Back to the top
                  </div>
                </li>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-orange transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact and Social */}
          <div>
            <h6 className="font-semibold text-lg mb-4">Connect With Us</h6>
            <div className="flex flex-col gap-4">
              <div className="text-sm text-gray-600">
                <p>Nairobi, Kenya</p>
                <p>+254 123 456 789</p>
              </div>
              <div className="flex gap-4">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="text-gray-600 hover:text-orange transition-colors"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="mailto:contact@example.com"
                  className="text-gray-600 hover:text-orange transition-colors"
                >
                  <Mail size={20} />
                </Link>
                <Link
                  href="https://tiktok.com"
                  target="_blank"
                  className="text-gray-600 hover:text-orange transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Vicwa Plumbing Supplies and
              Solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-orange transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-orange transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
