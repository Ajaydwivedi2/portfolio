import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub, FaMagnifyingGlass, FaSass } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";

function Projects() {
  return (
    <div className="flex flex-col gap-5 pb-28 max-md:px-14 max-sm:px-8 max-xs:px-1">
      <div className="flex flex-col gap-4 border-b-[.5px] border-navBorder pb-4">
        <h1 className="text-[41px] font-bold leading-tight md:text-[62px]">
          Projects
        </h1>
        <p className="text-[14px] md:text-[18px] ">
          I love building projects and practice my engineering skills, here's an
          archive of things that I've worked on.
        </p>
        <div className="flex h-[44px] w-full max-w-sm items-center justify-between rounded-md border-[.5px] border-navBorder px-4">
          <input
            type="text"
            className="w-full
            bg-transparent outline-none
            placeholder:text-[16px] placeholder:text-textSecondary
            "
            placeholder="Search for Projects"
          />
          <FaMagnifyingGlass className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex gap-10 max-md:flex-col">
          <div className="flex-1 overflow-hidden rounded-xl border-[.5px] border-navBorder bg-secondary ">
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
                positive or negative based on recent tweets using Natural
                Language Processing concept called Sentiment Analysis.
              </p>
            </div>
          </div>
          <div className="flex-1 overflow-hidden rounded-xl border-[.5px] border-navBorder bg-secondary ">
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
                positive or negative based on recent tweets using Natural
                Language Processing concept called Sentiment Analysis.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 max-md:flex-col">
          <div className="flex-1 overflow-hidden rounded-xl border-[.5px] border-navBorder bg-secondary ">
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
                positive or negative based on recent tweets using Natural
                Language Processing concept called Sentiment Analysis.
              </p>
            </div>
          </div>
          <div className="flex-1 overflow-hidden rounded-xl border-[.5px] border-navBorder bg-secondary ">
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
                positive or negative based on recent tweets using Natural
                Language Processing concept called Sentiment Analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
