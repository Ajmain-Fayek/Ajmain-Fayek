import React, { useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import emailjs from "@emailjs/browser";

const Send_Me_Message = () => {
  const [status, setStatus] = useState(null);
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);

    emailjs
      .sendForm(
        "Ajmain-Fayek",
        "template_leisbmj",
        form.current,
        "dezaGgtZOYp3zhJ0t"
      )
      .then(
        () => {
          setStatus({
            status: "success",
            message:
              "Thank you for getting in touch with me. I will get back to you as soon as possible. For a faster response, please feel free to contact me directly on my cell.",
          });
          e.target.reset();
          // console.log("SUCCESS!");
        },
        (error) => {
          setStatus({
            status: "error",
            message:
              "Sorry, but your message could not be sent due to a technical issue. Please try again later, or contact me directly on my cell for urgent matters",
          });
          // console.log("FAILED...", error.text);
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
              placeholder="Name/Organization (e.g. John, Google)"
              type="text"
              id="name"
              name="user_name"
              className="mt-1 p-2 block w-full bg-[#FAF9F6] border border-[#f0efec] drop-shadow-md ring-0 focus:ring-1  focus:outline-none rounded-md shadow-sm focus:ring-[#706758] sm:text-sm"
              required
            />
          </div>
          <div>
            <input
              placeholder="Email (eg. john@example.com)"
              type="email"
              id="email"
              name="user_email"
              className="mt-1 p-2 block w-full  bg-[#FAF9F6] border border-[#f0efec] drop-shadow-md ring-0 focus:ring-1  focus:outline-none rounded-md shadow-sm focus:ring-[#706758] sm:text-sm"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Message body..."
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 block w-full  bg-[#FAF9F6] border border-[#f0efec] drop-shadow-md ring-0 focus:ring-1  focus:outline-none rounded-md shadow-sm focus:ring-[#706758] sm:text-sm"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="self-start flex items-center font-semibold gap-x-2 btn-sm bg-[#706758] text-[#FAF9F6] rounded-md shadow-sm hover:scale-105 active:scale-100 transition-all ease-linear"
          >
            Send
            <IoSend />
          </button>
        </form>

        {/* status */}
        {status && (
          <div className="mt-8 transition-all ease-linear">
            <p
              className={`${
                status.status === "error"
                  ? "bg-red-100 text-red-950 "
                  : "bg-green-100 border text-green-950 "
              } p-6 rounded-md shadow-md relative`}
            >
              {status.message}
              <span
                onClick={() => setStatus(null)}
                className="absolute top-0.5 text-sm px-1 right-0.5 border border-red-400 font-medium text-red-600 rounded-full cursor-pointer hover:bg-red-200 active:scale-95 hover:scale-105 transition-all ease-linear"
              >
                X
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Send_Me_Message;
