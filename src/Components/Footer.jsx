import React from "react";
import Resume from "../assets/Resume_of_Ajmain Fayek_for_Web_programmer_v3.0.pdf";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { GrDocumentDownload } from "react-icons/gr";

const Footer = () => {
    return (
        <footer className="footer border-t p-10 max-w-screen-2xl mx-auto">
            <aside className="space-y-4">
                <h1 className="text-2xl text-white font-bold xl:text-4xl">
                    Ajmain Fayek
                </h1>
                <p className="text-lg text-[#cecece]">Web Programmer</p>
                <p className="text-base max-w-lg text-[#cecece] text-pretty">
                    Embarking on a Journey to Master the MERN Stack: Crafting
                    Scalable, Dynamic, and Feature-Rich Web Applications with
                    MongoDB, Express.js, React, and Node.js
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
                            href="https://www.facebook.com/AjmainFayek733"
                            target="_blank"
                            title="Facebook"
                        >
                            <FaFacebookSquare
                                color="#fff"
                                size={"2rem"}
                                className="hover:scale-110 active:scale-100 ease-linear transition-all"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href={Resume}
                            download={"Ajmain Fayek's Resume"}
                            title="Download Resume"
                            className="btn-sm btn flex-nowrap rounded-md hover:scale-110 active:scale-100 bg-[#6c55e0] hover:bg-[#6c55e0] text-white"
                        >
                            <GrDocumentDownload /> Resume
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
