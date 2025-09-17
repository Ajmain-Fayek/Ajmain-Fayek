import React from "react";
// import Resume from "../assets/Resume_of_Ajmain Fayek_for_Web_Developer.pdf";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="footer border-t p-10 max-w-screen-2xl mx-auto">
      <aside className="space-y-4">
        <h1 className="text-2xl text-white font-bold xl:text-4xl">
          Ajmain Fayek
        </h1>
        <p className="text-lg text-[#cecece]">Web Programmer</p>
        <p className="text-base max-w-lg text-[#cecece] text-pretty">
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
                color="#fff"
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
                color="#fff"
                size={"2rem"}
                className="hover:scale-110 active:scale-100 ease-linear transition-all"
              />
            </a>
          </li>
          <li>
            <a
              href="mailto:ajmainfayek733@gmail.com"
              title="Mail Me"
              className="btn-sm btn rounded-md hover:scale-105 active:scale-100 bg-[#6c55e0] hover:bg-[#6c55e0] text-white"
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
