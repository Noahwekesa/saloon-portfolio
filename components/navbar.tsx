"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
      </div>
    </div>
  );
};

export default Navbar;
