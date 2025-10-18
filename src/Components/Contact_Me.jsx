import React from "react";
import Send_Me_Message from "./Send_Me_Message";
import { IoLocationOutline, IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineLocationOn, MdOutlinePhoneCallback } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { RiContactsFill } from "react-icons/ri";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { LiaGithubSquare } from "react-icons/lia";
import { VscGithub } from "react-icons/vsc";

const Contact_Me = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-20">
      <div className="text-center">
        <h1 className="text-2xl flex items-center justify-center font-bold gap-1.5 drop-shadow-md">
          <RiContactsFill size={"1.5rem"} /> Contact Me
        </h1>
        <span className="text-sm text-[#5a595ec9] font-medium">
          How You Can Connect and Collaborate with Me
        </span>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <div className="lg:w-1/2 w-full space-y-4">
          <a
            href="https://wa.me/+8801568647092"
            target="_blank"
            title="Whatsapp"
            className="flex hover:underline drop-shadow-md items-center gap-4 lg:mt-2.5"
          >
            <IoLogoWhatsapp size={"1.5rem"} color="#706758" />
            +880 1568 647092
          </a>

          <a
            href="mailto:ajmainfayek733@gmail.com"
            title="Email"
            className="flex items-center gap-4 lg:mt-2.5 hover:underline drop-shadow-md"
          >
            <HiOutlineMail size={"1.5rem"} color="#706758" />
            ajmainfayek733@gmail.com
          </a>

          <a
            href="https://github.com/Ajmain-Fayek"
            target="_blank"
            title="Github"
            className="flex items-center gap-4 lg:mt-2.5 hover:underline drop-shadow-md"
          >
            <VscGithub size={"1.4rem"} color="#706758" />
            Ajmain-Fayek
          </a>

          <a
            href="https://www.linkedin.com/in/ajmainfayek733"
            target="_blank"
            title="LinkedIn"
            className="flex items-center gap-4 lg:mt-2.5 hover:underline drop-shadow-md"
          >
            <PiLinkedinLogoBold size={"1.5rem"} color="#706758" />
            in/ajmainfayek733
          </a>

          <p title="Location" className="flex items-center gap-4 lg:mt-2.5">
            <MdOutlineLocationOn size={"1.5rem"} color="#706758" />
            Dhaka, Bangladesh
          </p>
        </div>

        {/* Send me a message */}
        <div className="lg:w-1/2 w-full">
          <Send_Me_Message />
        </div>
      </div>
    </div>
  );
};

export default Contact_Me;
