"use client"; // Ensures this is a client component

import { navLinks } from "@/constant/navlinks";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiBars3BottomRight } from "react-icons/hi2";
import Image from "next/image";
import navMetadata from "./metadata";
import Head from "next/head";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setNavBg(true);
    } else {
      const handleScroll = () => setNavBg(window.scrollY >= 90);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  return (
    <>
      <Head>
        <title>{navMetadata.title}</title>
        <meta name="description" content={navMetadata.description} />
        <meta name="keywords" content={navMetadata.keywords.join(", ")} />
        <meta property="og:title" content={navMetadata.og.title} />
        <meta property="og:description" content={navMetadata.og.description} />
        <meta property="og:url" content={navMetadata.og.url} />
        <meta property="og:type" content={navMetadata.og.type} />
      </Head>
      <div
        className={`fixed w-full z-[1000] h-[8vh] transition-all duration-200`}
        style={{ backgroundColor: navBg ? "#024050" : "transparent" }}
      >
        <div className="flex items-center justify-between w-[90%] xl:w-[80%] mx-auto px-4 md:px-6 xl:px-8 py-2 md:py-3">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 relative">
              <Image
                src="/images/logo/logo.jpg"
                alt="tirthayatrik Logo"
                width={40} // Explicit width
                height={40} // Explicit height
                className="object-cover rounded-full"
                priority // Ensures the image loads fast without layout shift
              />
            </div>
            <Link
              href="/"
              className="text-lg md:text-xl text-white uppercase font-bold"
            >
              tirthayatrik
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                href={link.url}
                key={link.id}
                className="relative text-white text-sm md:text-base font-medium w-fit block"
              >
                <span className="after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#E07B37] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-6 h-6 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
