import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub, FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiStyledcomponents,
  SiReactquery,
  SiTypescript,
} from "react-icons/si";

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
            Here&rsquo;s some of my projects that I have worked on.
          </p>
          <Link
            href="/projects"
            className="hidden text-[21px] text-button1 md:inline"
          >
            Explore more &rarr;
          </Link>
        </div>
        <div className=" rounded-lg border-[.5px] border-dark600 bg-secondary md:row-span-2">
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
            <div className="mb-1 flex flex-col gap-2 border-b-[.5px] border-dark600 pb-2">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[22px] font-medium ">The wild oasis</h3>
                <div className="flex gap-4 text-[22px]">
                  <Link href="https://github.com/Ajaydwivedi2/the-wild-oasis/tree/master">
                    <FaGithub className="cursor-pointer" />
                  </Link>
                  <Link href="https://the-wild-cabins.vercel.app">
                    <FaExternalLinkAlt className="cursor-pointer" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-[14px] font-medium">
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
            <p className="text-textSecondary">
              The Wild Oasis facilitates seamless management of hotel check-ins
              and check-outs, focusing on enhancing operational efficiency for
              hotel employees. The project also served as a valuable learning
              experience in building Single Page Applications (SPAs).
            </p>
          </div>
        </div>
        <div className="rounded-lg border-[.5px] border-dark600 bg-secondary md:row-span-2">
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
            <div className="mb-1 flex flex-col gap-2 border-b-[.5px] border-dark600 pb-2">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[22px] font-medium ">Snapgram</h3>
                <div className="flex gap-4 text-[22px]">
                  <Link href="https://github.com/Ajaydwivedi2/social-media-app">
                    <FaGithub />
                  </Link>

                  <Link href="https://snapgram-liart.vercel.app/">
                    <FaExternalLinkAlt />
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-[14px] font-medium">
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
                      className="border-[0.5px] border-dark600 bg-white"
                    />
                  </span>
                  Shadcn/ui
                </div>
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
        <div className="rounded-lg border-[.5px] border-dark600 bg-secondary md:row-span-2">
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
            <div className="mb-1 flex flex-col gap-2 border-b-[.5px] border-dark600 pb-2">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[22px] font-medium ">DevOverflow</h3>
                <div className="flex gap-4 text-[22px]">
                  <Link href="https://github.com/Ajaydwivedi2/stack_overflow_next-js_14">
                    <FaGithub />
                  </Link>
                  <Link href="https://stack-overflow-next-js-14-7mlnpvcwk-ajaydwivedi.vercel.app/">
                    <FaExternalLinkAlt />
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 text-[14px] font-medium">
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
                      className="border-[0.5px] border-dark600 bg-white"
                    />
                  </span>
                  Shadcn/ui
                </div>
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
