import About_me from "./Components/About_me";
import Contact_Me from "./Components/Contact_Me";
import Education_Section from "./Components/Education_Section";
import Footer from "./Components/Footer";
import Info_Section from "./Components/Info_Section";
import Navbar from "./Components/Navbar";
import Projects_Section from "./Components/Projects_Section";
import Skill_Section from "./Components/Skill_Section";

function App() {
    return (
        <>
            <div className="sticky top-0 z-[99999] shadow-sm">
                <Navbar />
            </div>
            <div className="max-w-screen-2xl mx-auto">
                <section id="home" className="px-1">
                    <Info_Section />
                </section>
                <section id="about_me_section">
                    <About_me />
                </section>
                <section id="skills_section">
                    <Skill_Section />
                </section>
                <section id="education_section">
                    <Education_Section />
                </section>
                <section id="project_section">
                    <Projects_Section />
                </section>
                <section id="contact_me_section">
                    <Contact_Me />
                </section>
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
