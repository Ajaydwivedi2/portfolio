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
    <div className="light-border fixed left-0 top-0 z-20 flex h-[70px] w-full items-center justify-between bg-black px-6 md:px-8">
      <Link href="/" className="flex cursor-pointer items-center">
        <span className="logo-icon-text">&lt;</span>
        <p className="px-[.5px] text-[32px] font-bold">aD</p>
        <span className="logo-icon-text">&#47;&gt;</span>
      </Link>
      <div className="flex gap-14 max-sm:hidden">
        <div className="">
          <Link
            href="/"
            className="transition-ease flex items-center rounded-[5px] px-4 py-[6px] text-[17px] font-medium hover:bg-gray200"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            href="/projects"
            className="transition-ease flex items-center rounded-[5px] px-4 py-[6px] text-[17px] font-medium hover:bg-gray200"
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
          <SheetContent className=" light-border bg-black text-white">
            <SheetHeader className="">
              <SheetTitle className="w-fit pb-4">
                <Link
                  href="/"
                  className="flex cursor-pointer items-center text-white"
                >
                  <span className="logo-icon-text">&lt;</span>
                  <p className="px-[.5px] text-[32px] font-bold">aD</p>
                  <span className="logo-icon-text">&#47;&gt;</span>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="mt-10 flex flex-col  gap-5">
              <SheetClose asChild>
                <Button asChild className=" button-bg-hover text-[16px] ">
                  <Link href="/" className="w-full ">
                    Home
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild className="button-bg-hover text-[16px]">
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
