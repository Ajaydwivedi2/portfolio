import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import CustomButton from "./shared/CustomButton";

function Contact() {
  return (
    <>
      <div className="my-28 flex flex-col items-center gap-9">
        <h2 className="text-[35px] font-bold md:text-[50px]">Keep In Touch.</h2>

        <div className="text-center text-[17px] text-textSecondary ">
          <p className="">
            I&rsquo;m currently specializing in{" "}
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
          <CustomButton href="/">
            <FaLinkedin className="fill-button1" />
            Linkedin
          </CustomButton>

          <CustomButton href="mailto:ajaydwivedi873@gmail.com">
            <FaEnvelope className="fill-button1" />
            Email
          </CustomButton>

          <CustomButton href="/">
            <IoNewspaperOutline className="fill-button1" />
            Resume
          </CustomButton>
        </div>
      </div>
    </>
  );
}

export default Contact;
