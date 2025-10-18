import { MdWork } from "react-icons/md";

const work = [
  {
    title: "Web Developer",
    designation: "Intern",
    duration: "March 2025 - July 2025",
    company: "The ScoreCard",
    skills: [
      <>
        Designed, developed, and optimized databases using{" "}
        <strong>PostgreSQL</strong> and <strong>Prisma</strong> ORM
      </>,
      <>
        Built and maintained responsive frontend applications with{" "}
        <strong>Next.js</strong>
      </>,
      <>
        Implemented and managed{" "}
        <strong>Role-Based Access Control (RBAC)</strong> to improve security
        and scalability
      </>,
      <>
        Designed and developed RESTful APIs using <strong>Express.js</strong>{" "}
        for seamless system integration
      </>,
    ],
  },
  {
    title: "Web Developer",
    designation: "Junior",
    duration: "July 2025 - Present",
    company: "The ScoreCard",
    skills: [
      <>
        Contributing to day-to-day development tasks including feature
        enhancements, adding new functionality, and writing clean, maintainable
        code
      </>,
      <>
        Collaborated with team members to debug, test, and deploy features in
        alignment with project requirements
      </>,
    ],
  },
];
const Experience_Section = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-20">
      <div className="text-center">
        <h1 className="text-2xl flex items-center justify-center drop-shadow-md font-bold gap-1.5">
          <MdWork size={"2rem"} />
          Experience
        </h1>
        <span className="text-sm text-[#5a595ec9] font-medium">
          Professional Journey
        </span>
      </div>
      <div className="mt-10 grid lg:grid-cols-2 grid-cols-1 w-full gap-8 items-start">
        {work.map((w, idx) => (
          <div
            key={idx}
            className="w-full shadow-md p-4 rounded-lg border border-[#f0efec] hover:shadow-lg hover:scale-[101.5%] transition-all ease-linear"
          >
            <div>
              <h3 className="text-xl font-semibold drop-shadow-md">
                {w.title}

                {w?.designation && (
                  <span className="text-base font-normal text-[#454447] ml-2">
                    {w.designation}
                  </span>
                )}
              </h3>
              <p className="text-sm mt-1 sm:mt-0">{w.duration}</p>
              <p className="font-semibold mt-1 sm:mt-0">{w.company}</p>
            </div>

            {w?.skills && (
              <ul className="list-disc list-inside mt-3 font-medium space-y-1">
                {w.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience_Section;
