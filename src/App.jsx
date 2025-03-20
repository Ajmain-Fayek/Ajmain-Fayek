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

function App() {
    return (
        <>
            <div className="sticky top-0 z-[99999] shadow-sm">
                <Navbar />
            </div>
            <div className="max-w-screen-2xl mx-auto sm:px-4">
                <motion.section
                    initial={{ opacity: 0 }}
                    // onViewportEnter={{ opacity: 100 }}
                    // exit={{ opacity: 0 }}
                    // animate={{ opacity: 100, transition: { duration: 0.5 } }}
                    whileInView={{ opacity: 100 }}
                    id="home"
                    className="px-1"
                >
                    <Info_Section />
                </motion.section>
                <div className="border-t"></div>
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 100 }}
                    id="about_me_section"
                >
                    <About_me />
                </motion.section>
                <div className="border-t"></div>
                <motion.section
                    // onViewportEnter={(entry) =>
                    //     console.log(entry.isIntersecting)
                    // }
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 100 }}
                    // animate={{
                    //     opacity: 100,
                    //     transition: { duration: 0.5, delay: 0.5 },
                    // }}
                    id="skills_section"
                >
                    <Skill_Section />
                </motion.section>
                <div className="border-t"></div>
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 100 }}
                    id="education_section"
                >
                    <Education_Section />
                </motion.section>
                <div className="border-t"></div>
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 100 }}
                    id="project_section"
                >
                    <Projects_Section />
                </motion.section>
                <div className="border-t"></div>
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 100 }}
                    id="contact_me_section"
                >
                    <Contact_Me />
                </motion.section>
            </div>
            <div className="bg-[#6c55e0]">
                <Footer />
                <aside className="footer-center bg-white p-4">
                    <p className="text-sm">
                        Copyright © {new Date().getFullYear()} - All right
                        reserved by Ajmain Fayek.
                    </p>
                </aside>
            </div>
        </>
    );
}

export default App;
