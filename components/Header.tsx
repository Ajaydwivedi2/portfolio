import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <>
      {/* <div className=" pt-[110px] md:pt-[180px]  "> */}
      <div className="relative flex flex-col gap-10 ">
        <div className="absolute left-[-20px] top-[-3px] md:left-[-30px] md:top-[-15px]">
          <Image
            src="/assets/dot.svg"
            alt="background"
            height={70}
            width={70}
            className="-z-10  invert-[0.1] md:size-[140px]"
          />
        </div>
        <div className="z-10 ">
          <p className="mb-[-5px] text-[20px] font-semibold leading-none text-button1 md:text-[25px] lg:text-[30px] ">
            Hey there!, I&rsquo;m-
          </p>
          <h1 className=" text-[60px] font-black  leading-tight  sm:text-[85px] sm:font-bold md:text-[90px] md:leading-none xmd:text-[110px] lg:text-[120px] ">
            Ajay <span className="block xs:inline"> Dwivedi.</span>
          </h1>
        </div>
        <div>
          <p className="w-full max-w-2xl text-[22px] font-semibold leading-tight tracking-tighter text-textSecondary md:text-[25px] lg:text-[28px] xl:text-[30px]">
            <span className="text-white">Software Engineer.</span> A self-taught
            developer with an interest in Computer Science.
          </p>
        </div>
        <div className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px]">
          <p>
            🚀
            <span className="pl-1 text-textSecondary">
              Exploring opportunities and side projects.
            </span>
          </p>
          <div className="flex">
            <span>💻</span>
            <p className="pl-1 text-textSecondary">
              Currently specializing in
              <span className="text-button1"> Front-end Development.</span>
            </p>
          </div>
        </div>
        <div className="flex gap-5 ">
          <Button className="bg-borderColor text-[14px] transition  duration-300 ease-in-out hover:bg-hoverColor md:text-[16px]">
            <Link
              href="https://github.com/Ajaydwivedi2"
              className="flex items-center gap-3 "
            >
              <FaGithub className="fill-button1" />
              Github
            </Link>
          </Button>
          <Button className="bg-borderColor text-[14px] transition  duration-300 ease-in-out hover:bg-hoverColor md:text-[16px]">
            <Link
              href="https://linkedin.com/in/ajaydwivedi2"
              className="flex items-center gap-3"
            >
              <FaLinkedin className="fill-button1" />
              Linkedin
            </Link>{" "}
          </Button>
          <Button className="bg-borderColor text-[14px] transition  duration-300 ease-in-out hover:bg-hoverColor max-xs:hidden md:text-[16px]">
            <Link
              href="mailto:ajaydwivedi873@gmail.com"
              className="flex items-center gap-3"
            >
              <FaEnvelope className="fill-button1" /> Email
            </Link>
          </Button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Header;
