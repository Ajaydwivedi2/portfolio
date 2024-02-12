import Link from "next/link";
import React from "react";
import { FaHamburger } from "react-icons/fa";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <div className="fixed left-0 top-0 z-20 flex h-[70px] w-full items-center justify-between border-b-[.5px]  border-navBorder bg-black px-6 md:pl-12 md:pr-16">
      <div className="flex cursor-pointer items-center">
        <span className="text-[35px] font-bold text-textSecondary">&#123;</span>
        <p className="px-[.5px] text-[32px] font-bold">A</p>
        <span className="text-[35px] font-bold text-textSecondary">&#125;</span>
      </div>
      <div className="flex gap-14 max-sm:hidden">
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
            href="/projects"
            className="flex items-center rounded-[5px] px-4 py-[6px] text-[17px] font-medium transition duration-300 ease-in-out hover:bg-navHoverColor"
          >
            Projects
          </Link>
        </div>
      </div>
      <div className=" sm:hidden">
        <Sheet>
          <SheetTrigger>
            <FaHamburger className="text-[22px]" />
          </SheetTrigger>
          <SheetContent className=" border-b-[.5px]   border-navBorder bg-black text-white">
            <SheetHeader className="">
              <SheetTitle className="w-fit pb-4">
                <div className="flex cursor-pointer items-center">
                  <span className="text-[35px] font-bold text-textSecondary">
                    &#123;
                  </span>
                  <p className="px-[.5px] text-[32px] font-bold text-white">
                    A
                  </p>
                  <span className="text-[35px] font-bold text-textSecondary">
                    &#125;
                  </span>
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="mt-10 flex flex-col  gap-5">
              <SheetClose asChild>
                <Button
                  asChild
                  className="bg-borderColor text-[16px] transition duration-300 ease-in-out hover:bg-hoverColor "
                >
                  <Link href="/" className="w-full ">
                    Home
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  asChild
                  className="bg-borderColor text-[16px] transition  duration-300 ease-in-out hover:bg-hoverColor "
                >
                  <Link href="/projects" className="w-full ">
                    Projects
                  </Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Navbar;
