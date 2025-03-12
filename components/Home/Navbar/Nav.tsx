"use client"; // Ensures this is a client component

import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiBars3BottomRight } from "react-icons/hi2";
import { TbAirBalloon } from "react-icons/tb";

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
    <div
      className={`fixed w-full z-[1000] h-[6vh] transition-all duration-200 ${
        navBg ? "bg-blue-950" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
            <TbAirBalloon className="w-5 h-5 text-white" />
          </div>
          <Link href="/" className="text-lg md:text-xl text-white uppercase font-bold">
          Teerthayatrik
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id} className="relative text-white text-sm md:text-base font-medium w-fit block">
              <span className="after:block after:content-[''] after:absolute after:h-[2px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right">
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
  );
};

export default Nav;
