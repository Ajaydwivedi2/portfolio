import Image from "next/image";
import React from "react";
import { MdElectricBolt } from "react-icons/md";
import { FaHtml5, FaCss3, FaSass, FaReact } from "react-icons/fa6";

import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { FaGitAlt, FaGithubSquare } from "react-icons/fa";

function About() {
  return (
    <>
      <div className=" my-28 flex flex-col gap-20  md:mt-52 md:flex-row">
        <div className="flex flex-1 flex-col gap-5 text-[17px] text-textSecondary">
          <div className="flex items-center">
            <span className="pr-[2px] text-[25px] text-orange100">
              <MdElectricBolt />
            </span>
            <h3 className="text-[28px] font-bold text-white">About Me</h3>
          </div>
          <p>
            Hello there! I&rsquo;m Ajay Dwivedi, and my journey with computers
            began at a young age, igniting a lifelong passion.
          </p>
          <p>
            Building transformative tools that positively impact lives is what
            truly drives me. My
            <span className="text-button1"> developer journey</span> kicked off
            with a YouTube tutorial, leading me to immerse myself in numerous
            enriching courses offered by esteemed instructors worldwide. Along
            the way, I&rsquo;ve acquired a diverse skill set in
            <span className="text-button1"> frontend development</span>,
            spanning from HTML to Next.js. <br />
            Here&rsquo;s a glimpse of my tech stack:
            <span className="text-button1">
              {" "}
              <FaHtml5 className="inline-block px-[1px] " /> HTML,{" "}
              <FaCss3 className="inline-block px-[1px]" /> CSS,{" "}
              <SiTailwindcss className="inline-block px-[1px]" /> Tailwind CSS,{" "}
              <FaSass className="inline-block px-[1px]" /> Sass, Shadcn/UI,{" "}
              <IoLogoJavascript className="inline-block px-[1px]" /> JavaScript,{" "}
              <SiTypescript className="inline-block px-[1px]" /> TypeScript,{" "}
              <FaReact className="inline-block px-[1px]" /> React.js,{" "}
              <TbBrandNextjs className="inline-block px-[1px]" /> Next.js{" "}
            </span>
            and Version Control with{" "}
            <span className="text-button1">
              <FaGitAlt className="inline-block px-[1px]" /> Git{" "}
            </span>
            and{" "}
            <span className="text-button1">
              <FaGithubSquare className="inline-block px-[1px]" /> GitHub.
            </span>{" "}
            <br />
            Currently, I&rsquo;m delving into the realm of{" "}
            <span className="text-orange100">
              {" "}
              <TbBrandReactNative className="inline-block " /> React Native
            </span>
            .
          </p>
          <p>
            When I&rsquo;m not immersed in code, you&rsquo;ll find me exploring
            the vast expanse of the internet and connecting with fellow
            enthusiasts from across the globe.
          </p>
        </div>
        <div className=" relative flex flex-1 items-start justify-center ">
          <Image
            src="/assets/dot.svg"
            alt="background"
            height={150}
            width={150}
            className="absolute right-0 top-[-35px] z-[-1]  invert-[0.1] md:size-[200px]"
          />
          <Image
            src="/assets/itself.jpg"
            alt="Ajay dwivedi"
            height={350}
            width={350}
            className=" rounded-full max-md:h-auto max-md:w-[300px] max-xs:w-[250px]"
          />
        </div>
      </div>
    </>
  );
}

export default About;
