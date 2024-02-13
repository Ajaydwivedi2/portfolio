import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";

function Contact() {
  return (
    <>
      <div className="my-28 flex flex-col items-center gap-9">
        <h2 className="text-[35px] font-bold md:text-[48px]">Keep In Touch.</h2>

        <div className="text-center text-[17px] text-textSecondary ">
          <p className="">
            I'm currently specializing in{" "}
            <span className="text-button1 max-md:hidden">
              Front-end Development
            </span>
          </p>
          <p className="hidden text-button1 max-md:inline">
            Front-end Development
          </p>
          <p className="text-center text-[17px] text-textSecondary max-md:mt-8">
            Feel free to get in touch and talk more about your projects.
          </p>
        </div>

        <div className="flex justify-center gap-4 ">
          <Button className="bg-borderColor text-[14px] transition  duration-300 ease-in-out hover:bg-hoverColor max-xs:hidden md:text-[16px]">
            <Link href="/" className="flex items-center gap-3">
              <FaLinkedin className="fill-button1" />
              Linkedin
            </Link>
          </Button>
          <Button className="bg-borderColor text-[14px] transition  duration-300 ease-in-out hover:bg-hoverColor md:text-[16px]">
            <Link
              href="mailto:ajaydwivedi873@gmail.com"
              className="flex items-center gap-3"
            >
              <FaEnvelope className="fill-button1" />
              Email
            </Link>
          </Button>
          <Button className="bg-borderColor text-[14px] transition  duration-300 ease-in-out hover:bg-hoverColor md:text-[16px]">
            <Link href="/" className="flex items-center gap-3">
              <IoNewspaperOutline className="fill-button1" />
              Resume
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Contact;
