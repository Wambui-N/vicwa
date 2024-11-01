import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Black.otf",
      weight: "900",
      style: "black",
    },
    {
      path: "./fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vicwa | Plumbing Supplies and Solutions",
  description:
    "VicWa Plumbing Supplies and Solutions offers top-tier plumbing services, including waste piping, biodigester installation, water fault repairs, and borehole connections. Committed to quality and sustainability since 2019, we provide tailored solutions for both residential and commercial clients. Contact us today for reliable plumbing services in Nairobi, Kenya.",
  openGraph: {
    title: "Your Company Name | Web Design & SEO Services",
    description:
      "Professional web design and SEO services to help your business grow online.",
    images: ["/Logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
