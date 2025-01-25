import React, { useEffect, useState } from "react";
import { GrDocumentDownload } from "react-icons/gr";
import Resume from "../assets/Resume_of_Ajmain Fayek_for_Web_programmer_v3.0.pdf";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("home");

    const handleScroll = () => {
        const sections = document.querySelectorAll("section");
        let current = "home";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 2) {
                current = section.getAttribute("id");
            }
        });

        setActiveSection(current);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <a className="text-xl font-semibold">Ajmain Fayek</a>
            </div>
            <nav className="navbar-center hidden md:flex">
                <ul className="gap-4 px-1">
                    <li
                        className={`hidden lg:block ${
                            activeSection === "home" ? "active" : ""
                        }`}
                    >
                        <a href="#home">Home</a>
                    </li>
                    <li
                        className={
                            activeSection === "about_me_section" ? "active" : ""
                        }
                    >
                        <a href="#about_me_section">About Me</a>
                    </li>
                    <li
                        className={
                            activeSection === "skills_section" ? "active" : ""
                        }
                    >
                        <a href="#skills_section">Skills</a>
                    </li>
                    <li
                        className={
                            activeSection === "education_section"
                                ? "active"
                                : ""
                        }
                    >
                        <a href="#education_section">Education</a>
                    </li>
                    <li
                        className={
                            activeSection === "project_section" ? "active" : ""
                        }
                    >
                        <a href="#project_section">Projects</a>
                    </li>
                    <li
                        className={
                            activeSection === "contact_me_section"
                                ? "active"
                                : ""
                        }
                    >
                        <a href="#contact_me_section">Contact Me</a>
                    </li>
                </ul>
            </nav>
            <div className="navbar-end">
                <a
                    href={Resume}
                    download={"Ajmain Fayek's Resume"}
                    className="btn-sm btn active:scale-100 rounded-md bg-[#6c55e0] hover:bg-[#6c55e0] hover:scale-105 text-white"
                >
                    <GrDocumentDownload /> Resume
                </a>
            </div>
            <nav className="dropdown ml-1">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-sm md:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#6c55e0"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="flex-col gap-4 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 right-2 p-2 shadow"
                >
                    <li
                        className={`${
                            activeSection === "home" ? "active" : ""
                        }`}
                    >
                        <a href="#home">Home</a>
                    </li>
                    <li
                        className={
                            activeSection === "about_me_section" ? "active" : ""
                        }
                    >
                        <a href="#about_me_section">About Me</a>
                    </li>
                    <li
                        className={
                            activeSection === "skills_section" ? "active" : ""
                        }
                    >
                        <a href="#skills_section">Skills</a>
                    </li>
                    <li
                        className={
                            activeSection === "education_section"
                                ? "active"
                                : ""
                        }
                    >
                        <a href="#education_section">Education</a>
                    </li>
                    <li
                        className={
                            activeSection === "project_section" ? "active" : ""
                        }
                    >
                        <a href="#project_section">Projects</a>
                    </li>
                    <li
                        className={
                            activeSection === "contact_me_section"
                                ? "active"
                                : ""
                        }
                    >
                        <a href="#contact_me_section">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
