import React from "react";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { GiServerRack, GiSkills } from "react-icons/gi";
import { RiBracesLine } from "react-icons/ri";
import { SiExpress, SiJavascript, SiMongodb } from "react-icons/si";

const frontendSkills = [
    { name: "HTML", level: 85, logo: <FaHtml5 /> },
    { name: "CSS", level: 80, logo: <FaCss3Alt /> },
    { name: "JavaScript", level: 85, logo: <SiJavascript /> },
    { name: "React", level: 75, logo: <FaReact /> },
];

const backendSkills = [
    { name: "Node", level: 55, logo: <FaNodeJs /> },
    { name: "Express", level: 60, logo: <SiExpress /> },
    { name: "MongoDB", level: 65, logo: <SiMongodb /> },
];

const Skill_Section = () => {
    return (
        <div className="py-20 px-4 max-w-screen-lg mx-auto">
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

            <div className="flex gap-8 mt-8 justify-between flex-col lg:flex-row">
                <div className="p-10 rounded-lg shadow-md bg-[#f0eefc] hover:shadow-lg hover:scale-105 transition-all ease-linear">
                    <h3 className="lg:text-xl text-lg font-bold flex items-center gap-1.5 mb-4">
                        <RiBracesLine color="#6c55e0" size={"1.5rem"} />{" "}
                        Frontend
                    </h3>
                    <div className="flex flex-wrap gap-8 mt-10">
                        {frontendSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col-reverse items-center gap-4"
                            >
                                <h4 className="flex flex-col text-sm items-center gap-1.5">
                                    {skill.logo} {skill.name}
                                </h4>
                                <div
                                    className="radial-progress text-[#6c55e0]"
                                    style={{ "--value": skill.level }}
                                    role="progressbar"
                                >
                                    {skill.level}%
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-10 rounded-lg shadow-md bg-[#f0eefc] hover:shadow-lg hover:scale-105 transition-all ease-linear">
                    <h3 className="lg:text-xl text-lg font-semibold flex items-center gap-1.5 mb-4">
                        <GiServerRack color="#6c55e0" /> Backend
                    </h3>
                    <div className="flex flex-wrap gap-8 mt-10">
                        {backendSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col-reverse items-center gap-4"
                            >
                                <h4 className="flex text-sm flex-col items-center gap-1.5">
                                    {skill.logo} {skill.name}
                                </h4>
                                <div
                                    className="radial-progress text-[#6c55e0]"
                                    style={{ "--value": skill.level }}
                                    role="progressbar"
                                >
                                    {skill.level}%
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill_Section;
