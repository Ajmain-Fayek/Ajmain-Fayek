import React from "react";
import { BsTools } from "react-icons/bs";
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { GiServerRack, GiSkills } from "react-icons/gi";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { RiBracesLine } from "react-icons/ri";
import { SiExpress, SiJavascript, SiJsonwebtokens, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const frontendSkills = [
    { name: "HTML", logo: <FaHtml5 size={"1.5rem"} /> },
    { name: "CSS", logo: <FaCss3Alt size={"1.5rem"} /> },
    { name: "JavaScript", logo: <SiJavascript size={"1.5rem"} /> },
    { name: "React", logo: <FaReact size={"1.5rem"} /> },
    { name: "NextJs", logo: <TbBrandNextjs size={"1.5rem"} /> },
];

const backendSkills = [
    { name: "Node", logo: <FaNodeJs size={"1.5rem"} /> },
    { name: "Express", logo: <SiExpress size={"1.5rem"} /> },
    { name: "MongoDB", logo: <SiMongodb size={"1.5rem"} /> },
    // { name: "NextJs", logo: <TbBrandNextjs size={"1.5rem"} /> },
];
const toolsSkills = [
    { name: "Firebase", logo: <IoLogoFirebase size={"1.5rem"} /> },
    { name: "JWT", logo: <SiJsonwebtokens size={"1.5rem"} /> },
    { name: "Git", logo: <FaGitAlt size={"1.5rem"} /> },
    { name: "Github", logo: <FaGithub size={"1.5rem"} /> },
    { name: "Vercel", logo: <IoLogoVercel size={"1.5rem"} /> },
];

const Skill_Section = () => {
    return (
        <div className="py-20 px-4 max-w-screen-2xl mx-auto">
            <div className="text-center">
                <h1 className="text-2xl font-semibold flex items-center justify-center gap-1.5">
                    {" "}
                    <GiSkills />
                    Skills
                </h1>
                <span className="text-sm text-[#5a595e]">
                    My Proficiency and Expertise in Technology
                </span>
            </div>
            {/* Frontend */}
            <div className="flex gap-8 mt-8 justify-between flex-col lg:flex-row">
                <div className="p-10 rounded-lg shadow-md bg-[#f0eefc] hover:shadow-lg hover:scale-[101.5%] transition-all ease-linear">
                    <h3 className="lg:text-xl text-lg font-bold flex items-center gap-1.5 mb-4 text-[#6c55e0]">
                        <RiBracesLine color="#6c55e0" size={"1.5rem"} />{" "}
                        Frontend
                    </h3>
                    <div className="flex flex-wrap flex-grow justify-center gap-8 mt-10">
                        {frontendSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col-reverse items-center gap-4"
                            >
                                <h4 className="flex flex-col text-md items-center gap-1.5 text-[#5744b6]">
                                    {skill.logo} {skill.name}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Backend */}
                <div className="p-10 rounded-lg shadow-md bg-[#f0eefc] hover:shadow-lg hover:scale-[101.5%] transition-all ease-linear">
                    <h3 className="lg:text-xl text-lg font-semibold flex items-center gap-1.5 mb-4 text-[#6c55e0]">
                        <GiServerRack color="#6c55e0" /> Backend
                    </h3>
                    <div className="flex flex-wrap flex-grow justify-center gap-8 mt-10">
                        {backendSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col-reverse items-center gap-4"
                            >
                                <h4 className="flex text-md flex-col items-center gap-1.5 text-[#5744b6]">
                                    {skill.logo} {skill.name}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Tools */}
                <div className="p-10 rounded-lg shadow-md bg-[#f0eefc] hover:shadow-lg hover:scale-[101.5%] transition-all ease-linear">
                    <h3 className="lg:text-xl text-lg font-semibold flex items-center gap-1.5 mb-4 text-[#6c55e0]">
                        <BsTools color="#6c55e0" /> Tools
                    </h3>
                    <div className="flex flex-wrap flex-grow justify-center gap-8 mt-10">
                        {toolsSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col-reverse items-center gap-4"
                            >
                                <h4 className="flex text-md flex-col items-center gap-1.5 text-[#5744b6]">
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
