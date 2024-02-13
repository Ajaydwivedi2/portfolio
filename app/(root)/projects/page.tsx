import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaReact } from "react-icons/fa";
import { FaGithub, FaMagnifyingGlass } from "react-icons/fa6";
import {
  SiStyledcomponents,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

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
            <div className="overflow-hidden  md:max-h-[300px] ">
              <Image
                src="/assets/wildOasis.png"
                width={500}
                height={500}
                alt="Project img"
                className="w-full rounded object-cover"
              />
            </div>
            <div className="p-3">
              <div className="mb-1 flex justify-between border-b-[.5px] border-navBorder pb-2">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[22px] font-medium ">The wild oasis</h3>
                  <div className="flex gap-4 text-[15px] font-medium">
                    <div className="flex items-center gap-1 rounded bg-[rgba(137,178,250,0.16)] px-2  text-[#38bdf8]">
                      <FaReact />
                      React
                    </div>
                    <div className="flex items-center gap-1 rounded bg-[rgba(251,182,206,0.16)] px-2 text-[#FBB6CE]">
                      <span>
                        <SiStyledcomponents />
                      </span>
                      Styled component
                    </div>
                    <div className="flex items-center gap-1 rounded bg-[rgba(250,240,137,0.16)] px-2  text-[#FAF089]">
                      <span>
                        <SiReactquery />
                      </span>
                      React query
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 text-[22px]">
                  <Link href="https://github.com/Ajaydwivedi2/the-wild-oasis/tree/master">
                    <FaGithub className="cursor-pointer" />
                  </Link>
                  <Link href="https://the-wild-cabins.vercel.app">
                    <FaExternalLinkAlt className="cursor-pointer" />
                  </Link>
                </div>
              </div>
              <p className="text-textSecondary">
                The Wild Oasis facilitates seamless management of hotel
                check-ins and check-outs, focusing on enhancing operational
                efficiency for hotel employees. The project also served as a
                valuable learning experience in building Single Page
                Applications (SPAs).
              </p>
            </div>
          </div>
          <div className="flex-1 overflow-hidden rounded-xl border-[.5px] border-navBorder bg-secondary ">
            <div className="overflow-hidden  md:max-h-[300px] ">
              <Image
                src="https://github.com/Ajaydwivedi2/whisper-app/raw/master/public/css/image/snapgram_schreenshot.png?raw=true"
                width={500}
                height={500}
                alt="Project img"
                className=" w-full rounded object-cover"
              />
            </div>
            <div className="p-3">
              <div className="mb-1 flex justify-between border-b-[.5px] border-navBorder pb-2">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[22px] font-medium ">Snapgram</h3>
                  <div className="flex gap-4 text-[14px] font-medium">
                    <div className="flex items-center gap-1 rounded bg-[rgba(137,178,250,0.16)] px-2  text-[#38bdf8]">
                      <FaReact />
                      React
                    </div>
                    <div className="flex items-center gap-1 rounded bg-[rgba(182,239,251,0.16)] px-2 text-[#38bdf8]">
                      <span>
                        <SiTailwindcss />
                      </span>
                      Tailwind
                    </div>
                    <div className="flex items-center gap-1 rounded bg-[rgba(182,239,251,0.16)] px-2 text-[#38bdf8]">
                      <span>
                        <SiTypescript />
                      </span>
                      Typescript
                    </div>
                    <div className="flex items-center gap-1 rounded bg-[rgba(136,135,136,0.16)] px-2 text-[#ffff]">
                      <span>
                        <Image
                          src="/assets/shadcn-ui-seeklogo.svg"
                          alt="shadcn logo"
                          width={15}
                          height={15}
                          className="border-[0.5px] border-navBorder bg-white"
                        />
                      </span>
                      Shadcn/ui
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 text-[22px]">
                  <Link href="https://github.com/Ajaydwivedi2/social-media-app">
                    <FaGithub />
                  </Link>

                  <Link href="https://snapgram-liart.vercel.app/">
                    <FaExternalLinkAlt />
                  </Link>
                </div>
              </div>
              <p className="text-textSecondary">
                A cutting-edge social media platform designed for seamless user
                interaction. Snapgram offers an intuitive interface empowering
                users to effortlessly create, share, and discover posts. Our
                platform prioritizes user security and privacy through a robust
                authentication system, ensuring a safe and reliable social
                networking experience. The project also served as a valuable
                learning experience in building Single Page Applications (SPAs).
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 max-md:flex-col">
          <div className="flex-1 overflow-hidden rounded-xl border-[.5px] border-navBorder bg-secondary ">
            <div className="overflow-hidden md:max-h-[300px] ">
              <Image
                src="/assets/devOverflow.png"
                width={500}
                height={500}
                alt="Project img"
                className=" w-full rounded object-cover"
              />
            </div>
            <div className="p-3">
              <div className="mb-1 flex justify-between border-b-[.5px] border-navBorder pb-2">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[22px] font-medium ">DevOverflow</h3>
                  <div className="flex gap-4 text-[14px] font-medium">
                    <div className="flex items-center gap-1 rounded bg-[rgba(103,103,103,0.16)] px-2  text-[#ffff]">
                      <TbBrandNextjs />
                      Next.js
                    </div>
                    <div className="flex items-center gap-1 rounded bg-[rgba(182,239,251,0.16)] px-2 text-[#38bdf8]">
                      <span>
                        <SiTailwindcss />
                      </span>
                      Tailwind
                    </div>
                    <div className="flex items-center gap-1 rounded bg-[rgba(182,239,251,0.16)] px-2 text-[#38bdf8]">
                      <span>
                        <SiTypescript />
                      </span>
                      Typescript
                    </div>
                    <div className="flex items-center gap-1 rounded bg-[rgba(136,135,136,0.16)] px-2 text-[#ffff]">
                      <span>
                        <Image
                          src="/assets/shadcn-ui-seeklogo.svg"
                          alt="shadcn logo"
                          width={15}
                          height={15}
                          className="border-[0.5px] border-navBorder bg-white"
                        />
                      </span>
                      Shadcn/ui
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 text-[22px]">
                  <Link href="https://github.com/Ajaydwivedi2/stack_overflow_next-js_14">
                    <FaGithub />
                  </Link>
                  <Link href="https://stack-overflow-next-js-14-7mlnpvcwk-ajaydwivedi.vercel.app/">
                    <FaExternalLinkAlt />
                  </Link>
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
                src="https://github.com/Ajaydwivedi2/the-wild-oasis/raw/master/public/appScreenshot.png?raw=true"
                width={500}
                height={500}
                alt="Project img"
                className=" w-full rounded object-cover"
              />
            </div>
            <div className="p-3">
              <div className="mb-1 flex justify-between border-b-[.5px] border-navBorder pb-2">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[22px] font-medium ">DevOverflow</h3>
                  <div className="flex gap-4 text-[13px] font-medium">
                    <div className="flex items-center gap-1 rounded bg-[rgba(250,240,137,0.16)] px-2  text-[#FAF089]">
                      <TbBrandNextjs />
                      Next.js
                    </div>
                    <div className="flex items-center gap-1 rounded bg-[rgba(251,182,206,0.16)] px-2 text-[#FBB6CE]">
                      <span>
                        <SiTailwindcss />
                      </span>
                      Tailwind
                    </div>
                    <div className="flex items-center gap-1 rounded bg-[rgba(251,182,206,0.16)] px-2 text-[#FBB6CE]">
                      <span>
                        <SiTypescript />
                      </span>
                      Typescript
                    </div>
                    <div className="flex items-center gap-1 rounded bg-[rgba(251,182,206,0.16)] px-2 text-[#FBB6CE]">
                      <span>
                        <Image
                          src="/assets/shadcn-ui-seeklogo.svg"
                          alt="shadcn logo"
                          width={15}
                          height={15}
                          className="border-[0.5px] border-navBorder"
                        />
                      </span>
                      Shadcn/ui
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 text-[22px]">
                  <Link href="https://github.com/Ajaydwivedi2/stack_overflow_next-js_14">
                    <FaGithub />
                  </Link>
                  <Link href="https://stack-overflow-next-js-14-7mlnpvcwk-ajaydwivedi.vercel.app/">
                    <FaExternalLinkAlt />
                  </Link>
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
