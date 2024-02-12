import Image from "next/image";
import React from "react";
import { MdElectricBolt } from "react-icons/md";

function About() {
  return (
    <>
      {" "}
      <div className=" my-28 flex flex-col gap-20  md:mt-52 md:flex-row">
        <div className="flex flex-1 flex-col gap-5 text-[17px] text-textSecondary">
          <div className="flex items-center">
            <span className="pr-[2px] text-[25px] text-button1">
              <MdElectricBolt />
            </span>
            <h3 className="text-[28px] font-bold text-white">About Me</h3>
          </div>
          <p>
            Hey! I&rsquo;m Ajay Dwivedi, I&rsquo;ve been close to a computer
            since an early age, and been passionate about it ever since.
          </p>
          <p>
            I really liked to build stuff using no-code tools back in 2010, and
            from that, I explored how to code myself, fast-forward to today, I
            do programming in various languages and technologies, and had the
            privilege to worked in a Recruitment Company and a SaaS Company I'm
            interested in building something awesome with code and automate
            tasks with code, currently focused on Web & Mobile Development, Open
            Source and Competitive Programming
          </p>
          <p>
            When I'm not coding I play games with my friends, watch some show on
            Netflix, or if the weather's good, play basketball! 🏀
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
            alt="Image of developer"
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
