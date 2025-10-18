import React from "react";
import { BsTools } from "react-icons/bs";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { GiServerRack, GiSkills } from "react-icons/gi";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { RiBracesLine } from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { easeIn, easeInOut, keyframes, motion } from "motion/react";
import { BiLogoPostgresql } from "react-icons/bi";

const frontendSkills = [
  { name: "HTML", logo: <FaHtml5 size={"1.5rem"} /> },
  { name: "CSS", logo: <FaCss3Alt size={"1.5rem"} /> },
  { name: "JavaScript", logo: <SiJavascript size={"1.5rem"} /> },
  { name: "TypeScript", logo: <SiTypescript size={"1.5rem"} /> },
  {
    name: "React",
    logo: (
      <motion.div
        initial={{ rotate: 0 }}
        animate={{
          rotate: [0, 360],
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <FaReact size={"1.5rem"} />
      </motion.div>
    ),
  },
  { name: "NextJs", logo: <TbBrandNextjs size={"1.5rem"} /> },
];

const backendSkills = [
  { name: "Node", logo: <FaNodeJs size={"1.5rem"} /> },
  { name: "Express", logo: <SiExpress size={"1.5rem"} /> },
  { name: "MySQL", logo: <SiMysql size={"2rem"} /> },
  { name: "MongoDB", logo: <SiMongodb size={"1.5rem"} /> },
  { name: "PostgreSQL", logo: <BiLogoPostgresql size={"1.5rem"} /> },
];
const toolsSkills = [
  { name: "Git", logo: <FaGitAlt size={"1.5rem"} /> },
  { name: "Prisma", logo: <SiPrisma size={"1.5rem"} /> },
  { name: "Vercel", logo: <IoLogoVercel size={"1.5rem"} /> },
  //   { name: "Firebase", logo: <IoLogoFirebase size={"1.5rem"} /> },
  //   { name: "JWT", logo: <SiJsonwebtokens size={"1.5rem"} /> },
  //   { name: "Github", logo: <FaGithub size={"1.5rem"} /> },
];

const Skill_Section = () => {
  return (
    <div className="py-20 px-4 max-w-screen-2xl mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-semibold flex items-center justify-center gap-1.5 drop-shadow-md">
          {" "}
          <GiSkills />
          Skills
        </h1>
        <span className="text-sm text-[#5a595ec9] font-medium">
          My Proficiency and Expertise in Technology
        </span>
      </div>
      {/* Frontend */}
      <div className="flex gap-8 mt-8 justify-between flex-col lg:flex-row">
        <div className="flex-1 p-10 rounded-lg shadow-md bg-[#fffefc] border border-[#f0efec] hover:shadow-lg hover:scale-[101.5%] transition-all ease-linear">
          <h3 className="lg:text-xl text-lg font-bold flex items-center gap-1.5 mb-4 drop-shadow-md">
            <RiBracesLine color="#706758" size={"1.5rem"} /> Frontend
          </h3>
          <div className="flex flex-wrap flex-grow justify-center gap-8 mt-10">
            {frontendSkills.map((skill, index) => (
              <div
                key={index}
                className={`flex flex-col-reverse items-center gap-4`}
              >
                <h4
                  className={`flex flex-col text-md items-center gap-1.5 drop-shadow-md ${
                    skill?.name === "React" || skill?.name === "TypeScript"
                      ? "text-[#178fff]"
                      : ""
                  }`}
                >
                  {skill.logo} {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
        {/* Backend */}
        <div className="flex-1 p-10 rounded-lg shadow-md bg-[#fffefc] border border-[#f0efec] hover:shadow-lg hover:scale-[101.5%] transition-all ease-linear">
          <h3 className="lg:text-xl text-lg font-semibold flex items-center gap-1.5 mb-4 text-[#706758] drop-shadow-md">
            <GiServerRack color="#706758" /> Backend
          </h3>
          <div className="flex flex-wrap flex-grow justify-center gap-8 mt-10">
            {backendSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col-reverse items-center gap-4"
              >
                <h4 className="flex text-md flex-col items-center gap-1.5 drop-shadow-md">
                  {skill.logo} {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
        {/* Tools */}
        <div className="flex-1 p-10 rounded-lg shadow-md bg-[#fffefc] border border-[#f0efec] hover:shadow-lg hover:scale-[101.5%] transition-all ease-linear">
          <h3 className="lg:text-xl text-lg font-semibold flex items-center gap-1.5 mb-4 text-[#706758] drop-shadow-md">
            <BsTools color="#706758" /> Tools
          </h3>
          <div className="flex flex-wrap flex-grow justify-center gap-8 mt-10">
            {toolsSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col-reverse items-center gap-4"
              >
                <h4 className="flex text-md flex-col items-center gap-1.5 drop-shadow-md">
                  {skill.logo} {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill_Section;
