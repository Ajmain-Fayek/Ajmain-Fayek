import structoLogo from "./../assets/LogoWithText.webp";
import { SiOpenproject } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import StructoMate from "./../assets/StructoMate.webp";

const Projects_Section = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 py-20">
            <div className="text-center mb-8">
                <h1 className="text-2xl flex items-center justify-center font-bold gap-1.5">
                    <SiOpenproject size={"1.5rem"} /> Projects
                </h1>
                <span className="text-sm text-[#5a595e]">
                    Demonstrating the versatility and expertise of my skillset.
                </span>
            </div>
            {/* Projects card */}
            <div className="max-w-sm p-4 mx-auto rounded-md shadow-md hover:shadow-lg hover:scale-[101%] bg-[#f0eefc] transition-all ease-in-out">
                {/* Project 1 - StructoMate*/}
                <div>
                    <div className="flex items-center gap-1.5 py-2">
                        <img
                            className="h-8 w-8"
                            src={structoLogo}
                            alt="StructoMate Logo. A single-building management app for adding renters, managing agreements, sending announcements, and enabling members to pay rent monthly."
                        />
                        <h3 className="lg:text-xl text-lg font-semibold">
                            StructoMate
                        </h3>
                    </div>
                    <span className="text-sm block mb-4 mt-1 text-[#5a595e] text-balance">
                        A single-building management app for adding renters,
                        managing agreements, sending announcements, and enabling
                        members to pay rent monthly.
                    </span>
                    {/* Project Thumbnail */}
                    <div>
                        <img
                            src={StructoMate}
                            alt="Project: StrcutoMate. A Single Building Management Web Application build with MERN technology."
                        />
                    </div>
                    <div className="pt-4 flex gap-2 flex-wrap justify-center flex-grow">
                        <a
                            href="https://structomate.web.app/"
                            target="_blank"
                            title="Visit StructoMate Live website."
                            className="btn btn-sm flex-grow bg-[#6c55e0] hover:bg-[#6c55e0] text-white text-sm font-medium rounded-md hover:scale-105 transition-all ease-in-out"
                        >
                            <RiLiveFill size={"1.15rem"} /> Live
                        </a>
                        <a
                            href="https://github.com/Ajmain-Fayek/StructoMate.git"
                            target="_blank"
                            title="Source Code (Client Side)"
                            className="btn btn-sm flex-grow bg-[#6c55e0] hover:bg-[#6c55e0] text-white text-sm font-medium rounded-md hover:scale-105 transition-all ease-in-out"
                        >
                            <FaGithub size={"1.15rem"} />
                            (Client)
                        </a>
                        <a
                            href="https://github.com/Ajmain-Fayek/StructoMate-server.git"
                            target="_blank"
                            title="Source Code (Server Side)"
                            className="btn btn-sm flex-grow bg-[#6c55e0] hover:bg-[#6c55e0] text-white text-sm font-medium rounded-md hover:scale-105 transition-all ease-in-out"
                        >
                            <FaGithub size={"1.15rem"} />
                            (Server)
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects_Section;
