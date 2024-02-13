import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import React from "react";
import Image from "next/image";
import CustomButton from "./shared/CustomButton";

function Header() {
  return (
    <>
      <div className="relative flex flex-col gap-10 ">
        <div className="absolute left-[-20px] top-[-3px] md:left-[-38px] md:top-[-23px]">
          <Image
            src="/assets/dot.svg"
            alt="background"
            height={70}
            width={70}
            className="-z-10  invert-[0.1] md:size-[160px]"
          />
        </div>
        <div className="z-10 ">
          <p className="mb-[-5px] text-[20px] font-semibold leading-none text-button1 md:text-[25px] lg:text-[33px] ">
            Hey there!, I&rsquo;m-
          </p>
          <h1 className=" text-[60px] font-black  leading-tight  sm:text-[85px] sm:font-bold md:text-[90px] md:leading-none xmd:text-[110px] lg:text-[128px] ">
            Ajay <span className="block xs:inline"> Dwivedi.</span>
          </h1>
        </div>
        <div>
          <p className="w-full max-w-2xl text-[22px] font-semibold leading-tight tracking-tighter text-textSecondary md:text-[25px] lg:text-[28px] xl:text-[32px]">
            <span className="text-white">Software Engineer.</span> A self-taught
            developer with an interest in Computer Science.
          </p>
        </div>
        <div className="text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[22px]">
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
          <CustomButton href="https://github.com/Ajaydwivedi2">
            <FaGithub className="fill-button1" />
            Github
          </CustomButton>

          <CustomButton href="https://linkedin.com/in/ajaydwivedi2">
            <FaLinkedin className="fill-button1" />
            Linkedin
          </CustomButton>
          <CustomButton href="mailto:ajaydwivedi873@gmail.com">
            <FaEnvelope className="fill-button1" /> Email
          </CustomButton>
        </div>
      </div>
    </>
  );
}

export default Header;
