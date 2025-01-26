import React from "react";
import Send_Me_Message from "./Send_Me_Message";
import { IoLocationOutline, IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { RiContactsFill } from "react-icons/ri";

const Contact_Me = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 py-20">
            <div className="text-center">
                <h1 className="text-2xl flex items-center justify-center font-bold gap-1.5">
                    <RiContactsFill size={"1.5rem"} /> Contact Me
                </h1>
                <span className="text-sm text-[#5a595e]">
                    How You Can Connect and Collaborate with Me
                </span>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 mt-8">
                <div className="lg:w-1/2 w-full space-y-4">
                    <a
                        href="tel:+8801568647092"
                        title="Phone"
                        className="flex items-center hover:underline gap-4 lg:mt-2.5"
                    >
                        <MdOutlinePhoneCallback
                            size={"1.5rem"}
                            color="#6c55e0"
                        />
                        +880 1568 647092
                    </a>
                    <a
                        href="https://wa.me/+8801568647092"
                        target="_blank"
                        title="Whatsapp"
                        className="flex hover:underline items-center gap-4 lg:mt-2.5"
                    >
                        <IoLogoWhatsapp size={"1.5rem"} color="#6c55e0" />
                        +880 1568 647092
                    </a>

                    <a
                        href="mailto:ajmainfayek733@gmail.com"
                        title="Email"
                        className="flex items-center gap-4 lg:mt-2.5 hover:underline"
                    >
                        <HiOutlineMail size={"1.5rem"} color="#6c55e0" />
                        ajmainfayek733@gmail.com
                    </a>
                    <p
                        title="Location"
                        className="flex items-center gap-4 lg:mt-2.5"
                    >
                        <IoLocationOutline size={"1.5rem"} color="#6c55e0" />
                        Dhaka, Bangladesh
                    </p>
                </div>

                {/* Send me a message */}
                <div className="lg:w-1/2 w-full">
                    <Send_Me_Message />
                </div>
            </div>
        </div>
    );
};

export default Contact_Me;
