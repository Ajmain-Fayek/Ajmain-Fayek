import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const About_me = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 py-20">
            <div className="text-center">
                <h1 className="text-2xl flex items-center justify-center font-bold gap-1.5">
                    <FaInfoCircle size={"1.35rem"} />
                    About Me
                </h1>
                <span className="text-sm text-[#5a595e]">
                    An Insight into Who I Am and What I Bring to the Table
                </span>
            </div>
            <p className="text-[#5a595e] mt-8 text-wrap">
                My journey began with curiosity and has transformed into a
                strong passion for web development. I am now a confident
                developer, committed to creating impactful web applications that
                solve real-world problems. Day by day, I am becoming an expert
                in MongoDB, Express.js, React.js, Node.js, and Next.js.
                <br />
                In my free time, I enjoy hiking, bike riding, and watching
                Marvel Cinematic movies, sci-fi movies, comedy, and horror
                movies. I love the thrill of discovering new places, whether
                it's the hills, the sea, or the forest. Camping is one of my
                favorite activities as it allows me to connect with nature and
                unwind. I'm always eager to learn and experience something new.
            </p>
        </div>
    );
};

export default About_me;
