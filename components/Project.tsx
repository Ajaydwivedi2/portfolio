import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaSass, FaGithub } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";

function Project() {
  return (
    <>
      <div
        className="grid grid-cols-1
      gap-16
      md:grid-cols-2  md:grid-rows-4 md:place-items-start"
      >
        <div className="flex  flex-col gap-2 md:gap-1 ">
          <div className="flex gap-1 max-md:justify-between md:flex-col">
            <h3 className="text-[20px] font-bold md:text-[28px]">
              All Creative Works.
            </h3>
            <Link href="/" className="text-button1 md:hidden">
              Explore more &rarr;
            </Link>
          </div>

          <p className="leading-tight text-textSecondary md:text-[22px]">
            Here's some of my projects that I have worked on.
          </p>
          <Link href="/" className="hidden text-[21px] text-button1 md:inline">
            Explore more &rarr;
          </Link>
        </div>
        <div className=" rounded-lg border-[.5px] border-navBorder bg-secondary md:row-span-2">
          <div className="overflow-hidden  md:max-h-[300px] ">
            <Image
              src="/assets/card1.png"
              width={500}
              height={500}
              alt="Project img"
              className="w-full rounded object-cover"
            />
          </div>
          <div className="p-3">
            <div className="mb-1 flex justify-between border-b-[.5px] border-navBorder pb-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-[22px] font-medium ">Creative@home</h3>
                <div className="flex gap-4 text-[13px] font-medium">
                  <div className="flex items-center gap-1 rounded bg-[rgba(250,240,137,0.16)] px-2  text-[#FAF089]">
                    <IoLogoJavascript />
                    Javascript
                  </div>
                  <div className="flex items-center gap-1 rounded bg-[rgba(251,182,206,0.16)] px-2 text-[#FBB6CE]">
                    <span>
                      <FaSass />
                    </span>
                    Sass
                  </div>
                </div>
              </div>
              <div className="flex gap-4 text-[22px]">
                <FaGithub className="cursor-pointer" />
                <FaExternalLinkAlt className="cursor-pointer" />
              </div>
            </div>
            <p className="text-textSecondary">
              A web app to analyze whether an opinion on specific topic is
              positive or negative.
            </p>
          </div>
        </div>
        <div className="rounded-lg border-[.5px] border-navBorder bg-secondary md:row-span-2">
          <div className="overflow-hidden  md:max-h-[300px] ">
            <Image
              src="/assets/card1.png"
              width={500}
              height={500}
              alt="Project img"
              className=" w-full rounded object-cover"
            />
          </div>
          <div className="p-3">
            <div className="mb-1 flex justify-between border-b-[.5px] border-navBorder pb-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-[22px] font-medium ">Creative@home</h3>
                <div className="flex gap-4 text-[13px] font-medium">
                  <div className="flex items-center gap-1 rounded bg-[rgba(250,240,137,0.16)] px-2  text-[#FAF089]">
                    <IoLogoJavascript />
                    Javascript
                  </div>
                  <div className="flex items-center gap-1 rounded bg-[rgba(251,182,206,0.16)] px-2 text-[#FBB6CE]">
                    <span>
                      <FaSass />
                    </span>
                    Sass
                  </div>
                </div>
              </div>
              <div className="flex gap-4 text-[22px]">
                <FaGithub />
                <FaExternalLinkAlt />
              </div>
            </div>
            <p className="text-textSecondary">
              A web app to analyze whether an opinion on specific topic is
              positive or negative based on recent tweets using Natural Language
              Processing concept called Sentiment Analysis.
            </p>
          </div>
        </div>
        <div className="rounded-lg border-[.5px] border-navBorder bg-secondary md:row-span-2">
          <div className="overflow-hidden md:max-h-[300px] ">
            <Image
              src="/assets/card1.png"
              width={500}
              height={500}
              alt="Project img"
              className=" w-full rounded object-cover"
            />
          </div>
          <div className="p-3">
            <div className="mb-1 flex justify-between border-b-[.5px] border-navBorder pb-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-[22px] font-medium ">Creative@home</h3>
                <div className="flex gap-4 text-[13px] font-medium">
                  <div className="flex items-center gap-1 rounded bg-[rgba(250,240,137,0.16)] px-2  text-[#FAF089]">
                    <IoLogoJavascript />
                    Javascript
                  </div>
                  <div className="flex items-center gap-1 rounded bg-[rgba(251,182,206,0.16)] px-2 text-[#FBB6CE]">
                    <span>
                      <FaSass />
                    </span>
                    Sass
                  </div>
                </div>
              </div>
              <div className="flex gap-4 text-[22px]">
                <FaGithub />
                <FaExternalLinkAlt />
              </div>
            </div>
            <p className="text-textSecondary">
              A web app to analyze whether an opinion on specific topic is
              positive or negative based on recent tweets using Natural Language
              Processing concept called Sentiment Analysis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
