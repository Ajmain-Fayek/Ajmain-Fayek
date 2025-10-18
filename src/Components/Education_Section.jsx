import { FaGraduationCap } from "react-icons/fa";

const Education_Section = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-20">
      <div className="text-center">
        <h1 className="text-2xl flex items-center justify-center font-bold gap-1.5 drop-shadow-md">
          <FaGraduationCap size={"2rem"} />
          Education
        </h1>
        <span className="text-sm text-[#5a595ec9] font-medium">
          Overview of My Academic Background and Achievements
        </span>
      </div>

      <p className="mt-8 font-medium text-pretty">
        Currently pursuing a degree in{" "}
        <strong className="italic">Computer Science and Engineering</strong> at
        the{" "}
        <strong className="italic">
          <a
            href="https://iubat.edu"
            target="_blank"
            className="hover:underline"
          >
            IUBAT-International University of Business Agriculture and
            Technology
          </a>
        </strong>
        .
      </p>
      <p className="text-wrap mt-4 font-semibold">
        Expected graduation year: 2027
      </p>
    </div>
  );
};

export default Education_Section;
