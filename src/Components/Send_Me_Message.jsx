import React, { useRef } from "react";
import { IoSend } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { Slide, toast } from "react-toastify";

const Send_Me_Message = () => {
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "Ajmain-Fayek",
                "template_leisbmj",
                form.current,
                "dezaGgtZOYp3zhJ0t"
            )
            .then(
                () => {
                    toast.success("SUCCESS!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Slide,
                    });
                    e.target.reset();
                    // console.log("SUCCESS!");
                },
                (error) => {
                    toast.error("FAILED...!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Slide,
                    });
                    console.log("FAILED...", error.text);
                }
            );
    };
    return (
        <div>
            <div>
                <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    <div>
                        <input
                            placeholder="Name"
                            type="text"
                            id="name"
                            name="user_name"
                            className="mt-1 p-2 block w-full bg-[#f0eefc]  ring-0 focus:ring-1  focus:outline-none rounded-md shadow-sm focus:ring-[#6c55e0] sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Email"
                            type="email"
                            id="email"
                            name="user_email"
                            className="mt-1 p-2 block w-full  bg-[#f0eefc]  ring-0 focus:ring-1  focus:outline-none rounded-md shadow-sm focus:ring-[#6c55e0] sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Message"
                            id="message"
                            name="message"
                            rows="4"
                            className="mt-1 p-2 block w-full  bg-[#f0eefc]  ring-0 focus:ring-1  focus:outline-none rounded-md shadow-sm focus:ring-[#6c55e0] sm:text-sm"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="self-start flex items-center gap-1 btn-sm bg-[#6c55e0] text-white rounded-md shadow-sm hover:scale-105 active:scale-100 transition-all ease-linear"
                    >
                        Send Me Message
                        <IoSend />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Send_Me_Message;
