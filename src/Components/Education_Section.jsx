import { FaGraduationCap } from "react-icons/fa";

const Education_Section = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 py-20">
            <div className="text-center">
                <h1 className="text-2xl flex items-center justify-center font-bold gap-1.5">
                    <FaGraduationCap size={"2rem"} />
                    Education
                </h1>
                <span className="text-sm text-[#5a595e]">
                    Overview of My Academic Background and Achievements
                </span>
            </div>

            <p className="text-[#5a595e] mt-8 text-pretty">
                Currently pursuing a degree in{" "}
                <strong>Computer Science and Engineering</strong> at the{" "}
                <strong>
                    <a
                        href="https://iubat.edu"
                        target="_blank"
                        className="hover:underline"
                    >
                        IUBAT-International University of Business Agriculture
                        and Technology
                    </a>
                </strong>
                .
            </p>
            <p className="text-[#5a595e] text-wrap mt-4 font-semibold">
                Expected graduation year: 2027
            </p>
        </div>
    );
};

export default Education_Section;
