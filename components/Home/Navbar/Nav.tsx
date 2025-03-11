"use client";

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
  const [isMounted, setIsMounted] = useState(false);
  const [navBg, setNavBg] = useState(false);

  // Use pathname unconditionally
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    setIsMounted(true); // Ensures component has mounted before accessing pathname
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // If not on home route, always set navBg to true
    if (!isHome) {
      setNavBg(true);
    } else {
      const handler = () => {
        setNavBg(window.scrollY >= 90 || !isHome);
      };

      window.addEventListener("scroll", handler);
      return () => window.removeEventListener("scroll", handler);
    }
  }, [isHome]);

  return (
    <div
      className={`transition-all duration-200 h-[6vh] z-[1000] fixed w-full ${
        navBg ? "bg-blue-950" : "bg-transparent"
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
            <TbAirBalloon className="w-5 h-5 text-white" />
          </div>

<Link href="/" className="text-lg md:text-xl text-white uppercase font-bold cursor-pointer">
  Teerthayatrik
</Link>

        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className='relative text-white text-sm md:text-base font-medium w-fit block after:block after:content-[""] after:absolute after:h-[2px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right'>
                {link.label}
              </p>
            </Link>
          ))}
        </div>

        {/* Burger Menu */}
        <HiBars3BottomRight
          onClick={openNav}
          className="w-6 h-6 cursor-pointer text-white lg:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;
