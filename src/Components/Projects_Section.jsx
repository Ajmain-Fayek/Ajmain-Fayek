import React from "react";
import MindMosaic from "../assets/mindMosaic.png";
import { HiPaperAirplane } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

const Projects_Section = () => {
    return (
        <div className="max-w-screen-lg mx-auto px-4 py-20">
            <div className="text-center mb-8">
                <h1 className="text-2xl flex items-center justify-center font-bold gap-1.5">
                    Projects
                </h1>
                <span className="text-sm text-[#5a595e]">
                    Demonstrating the versatility and expertise of my skillset.
                </span>
            </div>
            {/* Projects card */}
            <div className="max-w-screen-sm p-2 mx-auto rounded-md shadow-md hover:shadow-lg hover:scale-105 bg-[#f0eefc] transition-all ease-in-out">
                <div className="flex items-center gap-1.5">
                    <img className="h-4 w-4" src={MindMosaic} />
                    <h3 className="lg:text-xl text-lg font-semibold">
                        Mind Mosaic
                    </h3>
                </div>
                <span className="text-sm block mb-4 mt-1 text-[#5a595e]">
                    A blog writing application that allows users to create,
                    edit, and publish their own blog posts.
                </span>
                {/* Carousel */}
                <div className="carousel snap-align-none w-full">
                    <div
                        id="item1"
                        className="carousel-item snap-align-none w-full"
                    >
                        <img
                            src="https://i.ibb.co.com/HXrqzQ1/Screenshot-2025-01-05-155448.png"
                            className="w-full"
                        />
                    </div>
                    <div
                        id="item2"
                        className="carousel-item snap-align-none w-full"
                    >
                        <img
                            src="https://i.ibb.co.com/6rjsrrb/Screenshot-2025-01-05-155242.png"
                            className="w-full"
                        />
                    </div>
                    <div
                        id="item3"
                        className="carousel-item snap-align-none w-full"
                    >
                        <img
                            src="https://i.ibb.co.com/dbTd4b1/Screenshot-2025-01-05-155750.png"
                            className="w-full"
                        />
                    </div>
                    <div
                        id="item4"
                        className="carousel-item snap-align-none w-full"
                    >
                        <img
                            src="https://i.ibb.co.com/0MRqrqk/Screenshot-2025-01-05-155220.png"
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    <a
                        href="#item1"
                        className="btn btn-xs btn-square bg-[#6c55e0] text-white"
                    >
                        1
                    </a>
                    <a
                        href="#item2"
                        className="btn btn-xs btn-square bg-[#6c55e0] text-white"
                    >
                        2
                    </a>
                    <a
                        href="#item3"
                        className="btn btn-xs btn-square bg-[#6c55e0] text-white"
                    >
                        3
                    </a>
                    <a
                        href="#item4"
                        className="btn btn-xs btn-square bg-[#6c55e0] text-white"
                    >
                        4
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <a
                        title="Live Link"
                        href="https://mind-mosaic.web.app"
                        className="p-2 hover:scale-110 active:scale-100 transition-all ease-in-out"
                        target="_blank"
                    >
                        <HiPaperAirplane color="#6c55e0" size={"2rem"} />
                    </a>
                    <a
                        title="Github repo Client side"
                        href="https://github.com/Ajmain-Fayek/Mind-Mosaic-Client"
                        className="p-2 hover:scale-110 active:scale-100 transition-all ease-in-out"
                        target="_blank"
                    >
                        <FaGithubSquare color="#6c55e0" size={"2rem"} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects_Section;
