import structoLogo from "/LogoWithText.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import structo1 from "/structomate (1).webp";
import structo2 from "/structomate (2).webp";
import structo3 from "/structomate (3).webp";
import { SiOpenproject } from "react-icons/si";

const Projects_Section = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 py-20">
            <div className="text-center mb-8">
                <h1 className="text-2xl flex items-center justify-center font-bold gap-1.5">
                    <SiOpenproject size={"1.5rem"} /> Projects
                </h1>
                <span className="text-sm text-[#5a595e]">
                    Demonstrating the versatility and expertise of my skillset.
                </span>
            </div>
            {/* Projects card */}
            <div className="max-w-sm p-2 mx-auto rounded-md shadow-md hover:shadow-lg hover:scale-105 bg-[#f0eefc] transition-all ease-in-out">
                <div className="flex items-center gap-1.5 py-2">
                    <img
                        className="h-8 w-8"
                        src={structoLogo}
                        alt="StructoMate Logo. A single-building management app for adding renters, managing agreements, sending announcements, and enabling members to pay rent monthly."
                    />
                    <h3 className="lg:text-xl text-lg font-semibold">
                        StructoMate
                    </h3>
                </div>
                <span className="text-sm block mb-4 mt-1 text-[#5a595e]">
                    A single-building management app for adding renters,
                    managing agreements, sending announcements, and enabling
                    members to pay rent monthly.
                </span>
                {/* Carousel */}
                <Carousel showThumbs={false} showStatus={false}>
                    <div>
                        <img
                            alt="StructoMate Preview. A single-building management app for adding renters, managing agreements, sending announcements, and enabling members to pay rent monthly."
                            src={structo2}
                        />
                    </div>
                    <div>
                        <img
                            alt="StructoMate Preview. A single-building management app for adding renters, managing agreements, sending announcements, and enabling members to pay rent monthly."
                            src={structo3}
                        />
                    </div>
                    <div>
                        <img
                            alt="StructoMate Preview. A single-building management app for adding renters, managing agreements, sending announcements, and enabling members to pay rent monthly."
                            src={structo1}
                        />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Projects_Section;
