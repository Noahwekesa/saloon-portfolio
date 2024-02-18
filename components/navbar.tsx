"use client";

import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };
  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
        </div>
        <div className="cursor-pointer hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          <Link href="/" className="hover:text-gray-50">
            OUR TEAM
          </Link>
          <Link href="/" className="hover:text-gray-50">
            STYLES
          </Link>
          <Link href="/" className="hover:text-gray-50">
            SPA
          </Link>
          <Link href="/" className="hover:text-gray-50">
            JOIN OUR TEAM
          </Link>
          <Link href="/" className="hover:text-gray-50">
            PRICING
          </Link>
        </div>
        <div className="flex md:hidden">
          {isDropDownVisible ? (
            // display an x icon wheen the drop down is visible
            <div onClick={toggleDropDown} className="w-8 h-8 text-slate-300">
              <X />
              <DropDownMenu />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300"
            />
          )}
        </div>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="
            rounded inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50

            "
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
