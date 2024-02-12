import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="fixed left-0 top-0 flex h-[70px] w-full items-center justify-between border-b-[.5px] border-navBorder  px-6 md:pl-12 md:pr-16">
      <div className="flex cursor-pointer items-center">
        <span className="text-[35px] font-bold text-textSecondary">&#123;</span>
        <p className="px-[.5px] text-[32px] font-bold">A</p>
        <span className="text-[35px] font-bold text-textSecondary">&#125;</span>
      </div>
      <div className="flex gap-14">
        <div className="">
          <Link
            href="/"
            className="flex items-center rounded-[5px] px-4 py-[6px] text-[17px] font-medium transition duration-300 ease-in-out hover:bg-navHoverColor"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            href="Projects"
            className="flex items-center rounded-[5px] px-4 py-[6px] text-[17px] font-medium transition duration-300 ease-in-out hover:bg-navHoverColor"
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
