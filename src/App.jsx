import About_me from "./Components/About_me";
import Contact_Me from "./Components/Contact_Me";
import Education_Section from "./Components/Education_Section";
import Footer from "./Components/Footer";
import Info_Section from "./Components/Info_Section";
import Navbar from "./Components/Navbar";
import Projects_Section from "./Components/Projects_Section";
import Skill_Section from "./Components/Skill_Section";
import { motion } from "motion/react";
import "animate.css";
import Experience_Section from "./Components/Experience_Section";

function App() {
  return (
    <>
      <div className="sticky top-0 z-[99999] shadow-lg">
        <Navbar />
      </div>
      <div className="max-w-screen-2xl mx-auto sm:px-4">
        {/* Info Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          id="home"
          className="px-1"
        >
          <Info_Section />
        </motion.section>
        {/* <div className="border-t"></div> */}

        {/* About me Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          id="about_me_section"
          className="bg-[#FAF9F6] rounded-xl drop-shadow-md sm:px-4 px-1.5"
        >
          <About_me />
        </motion.section>
        {/* <div className="border-t"></div> */}

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          id="experience_section"
        >
          <Experience_Section />
        </motion.section>
        {/* <div className="border-t"></div> */}

        {/* Skill Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          id="skills_section"
          className="bg-[#FAF9F6] rounded-xl drop-shadow-md sm:px-4 px-1.5"
        >
          <Skill_Section />
        </motion.section>
        {/* <div className="border-t"></div> */}

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          id="education_section"
        >
          <Education_Section />
        </motion.section>
        {/* <div className="border-t"></div> */}

        {/* Project Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          id="project_section"
          className="bg-[#FAF9F6] rounded-xl drop-shadow-md sm:px-4 px-1.5"
        >
          <Projects_Section />
        </motion.section>
        {/* <div className="border-t"></div> */}

        {/* Contact me Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          id="contact_me_section"
        >
          <Contact_Me />
        </motion.section>
      </div>
      <div className="bg-[#eeede9] rounded-t-3xl drop-shadow-md sm:px-4 px-1.5">
        <Footer />
        <aside className="footer-center p-4">
          <p className="text-sm font-medium">
            Copyright © {new Date().getFullYear()} - All right reserved by
            Ajmain Fayek.
          </p>
        </aside>
      </div>
    </>
  );
}

export default App;
