import React from "react";
// import Resume from "../assets/Resume_of_Ajmain Fayek_for_Web_Developer.pdf";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="footer p-10 max-w-screen-2xl mx-auto">
      <aside className="space-y-4">
        <h1 className="text-2xl font-bold xl:text-4xl drop-shadow-md">
          Ajmain Fayek
        </h1>
        <p className="text-[#5a595ec9] font-medium underline">
          Full Stack Developer
        </p>
        <p className="text-base max-w-lg font-medium text-pretty">
          Embarking on a Journey to Master the MERN Stack: Crafting Scalable,
          Dynamic, and Feature-Rich Web Applications with MongoDB, Express.js,
          React, and Node.js
        </p>
      </aside>
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
              href="mailto:ajmainfayek733@gmail.com"
              title="Mail Me"
              className="btn-sm btn rounded-md hover:scale-105 active:scale-100 bg-[#706758] hover:bg-[#706758] text-[#fffefc]"
            >
              <GrMail /> Mail Me
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
