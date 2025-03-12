"use client"; // Ensures this is a client component

import { navLinks } from "@/constant/navlinks";
import Link from "next/link";
import React, { useEffect } from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  useEffect(() => {
    document.body.style.overflow = showNav ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNav]);

  return (
    <>
      {showNav && <div className="fixed inset-0 bg-black opacity-70 z-[1001]" onClick={closeNav}></div>}

      <div
        className={`fixed top-0 left-0 h-full w-[75%] sm:w-[60%] bg-blue-950 z-[1002] p-6 transform ${
          showNav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Close Button */}
        <CgClose className="w-6 h-6 text-white cursor-pointer ml-auto" onClick={closeNav} />

        {/* Nav Links */}
        <nav className="mt-8">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url} className="block text-white text-lg py-3" onClick={closeNav}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
