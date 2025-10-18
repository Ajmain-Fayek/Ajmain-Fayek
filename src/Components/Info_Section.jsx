import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { RiScrollToBottomFill } from "react-icons/ri";
// import Resume from "../assets/Resume_of_Ajmain Fayek_for_Web_Developer.pdf";
// import Photo from "../assets/Photo of Ajmain Fayek.webp";
import Photo from "../assets/photo.webp";

const Info_Section = () => {
  return (
    <div className="flex relative flex-col-reverse max-w-screen-2xl mx-auto gap-4 md:flex-row py-14 md:py-32 w-full items-center">
      <div className="md:w-1/2 w-full flex flex-col">
        <div className="space-y-4 p-4">
          <h1 className="text-2xl font-bold xl:text-4xl drop-shadow-md">
            Hi, I'm Ajmain Fayek
          </h1>
          <p className="text-[#5a595ec9] font-medium underline">
            Full Stack Developer
          </p>
          <p className="text-base font-medium text-pretty">
            Embarking on a Journey to Master the MERN Stack: Crafting Scalable,
            Dynamic, and Feature-Rich Web Applications with MongoDB, Express.js,
            React, and Node.js
          </p>
          <div className="py-10">
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://github.com/Ajmain-Fayek"
                  target="_blank"
                  title="Github"
                >
                  <FaGithubSquare
                    color="#706758"
                    size={"2rem"}
                    className="hover:scale-110 active:scale-100 ease-linear transition-all"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ajmainfayek733"
                  target="_blank"
                  title="LinkedIn"
                >
                  <FaLinkedin
                    color="#706758"
                    size={"2rem"}
                    className="hover:scale-110 active:scale-100 ease-linear transition-all"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#contact_me_section"
                  title="Contact Me"
                  className="btn-sm btn rounded-md hover:scale-105 active:scale-100 bg-[#706758] hover:bg-[#706758] text-[#fffefc]"
                >
                  <GrMail /> Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full flex justify-center">
        <div>
          <img
            className="w-[320px] bg-[#FAF9F6] rounded-full drop-shadow-lg hover:shadow-2xl"
            src={Photo}
            title="Ajmain Fayek | Full Stack Developer"
            alt="Picture of Ajmain Fayek. Full Stack Developer."
          />
        </div>
      </div>
      <div className="flex absolute bottom-8 md:bottom-16 gap-1 items-center -mt-10">
        <RiScrollToBottomFill color="#706758" size={"1.5rem"} />
        Scroll down
      </div>
    </div>
  );
};

export default Info_Section;
