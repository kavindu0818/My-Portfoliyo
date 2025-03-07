import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    java,
    html,
    python,
    js,
    typeScript,
    sprinBoot,
    react,
    nextJs,
    nodeJs,
    mongoDb,
    mysql,
    hibernate,
    github,
    windows,
    linux,
    prisma
} from "../assets/SkillsLogo.ts";
import Title from "../components/layouts/Title.tsx";

const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section
            id="skills"
            className="w-full h-full flex flex-col items-center justify-center px-5 md:px-10 border-b border-white font-titleFont bg-[#191b1e] pb-15"
        >
            <div className="flex justify-center items-center text-center mb-8">
                <Title title="7+ YEARS OF EXPERIENCE" des="Skills" />
            </div>

            {/* Using CSS Grid to organize sections into columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
                {/* First Section */}
                <div
                    data-aos="fade-up"
                    className="flex flex-col items-center justify-center"
                >
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">LANGUAGES</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {[{ img: java, name: "Java" }, { img: html, name: "HTML" }, { img: python, name: "Python" },
                            { img: js, name: "JavaScript" }, { img: typeScript, name: "TypeScript" }].map((item, index) => (
                            <span key={index} className="w-20 h-20 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex flex-col items-center justify-center rounded-md shadow-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-yellow-400 cursor-pointer duration-300 shadow-lg hover:shadow-xl">
                                <img className="w-10 h-8" src={item.img} alt={item.name} />
                                <p className="text-xs mt-1">{item.name}</p>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Second Section */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="flex flex-col items-center justify-center"
                >
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">FRAMEWORKS & LIBRARIES</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {[{ img: sprinBoot, name: "Spring boot" }, { img: react, name: "React" }, { img: nodeJs, name: "Node Js" },
                            { img: nextJs, name: "Next Js" }].map((item, index) => (
                            <span key={index} className="w-20 h-20 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex flex-col items-center justify-center rounded-md shadow-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-yellow-400 cursor-pointer duration-300 shadow-lg hover:shadow-xl">
                                <img className="w-10 h-8" src={item.img} alt={item.name} />
                                <p className="text-xs mt-1">{item.name}</p>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Third Section */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="flex flex-col items-center justify-center"
                >
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">DATABASE</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {[{ img: mongoDb, name: "Mongo DB" }, { img: mysql, name: "MySQL" }].map((item, index) => (
                            <span key={index} className="w-20 h-20 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex flex-col items-center justify-center rounded-md shadow-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-yellow-400 cursor-pointer duration-300 shadow-lg hover:shadow-xl">
                                <img className="w-10 h-8" src={item.img} alt={item.name} />
                                <p className="text-xs mt-1">{item.name}</p>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Fourth Section */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex flex-col items-center justify-center"
                >
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">ORM TOOLS</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {[{ img: hibernate, name: "Hibernate" }, { img: prisma, name: "Prisma" }].map((item, index) => (
                            <span key={index} className="w-20 h-20 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex flex-col items-center justify-center rounded-md shadow-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-yellow-400 cursor-pointer duration-300 shadow-lg hover:shadow-xl">
                                <img className="w-10 h-8" src={item.img} alt={item.name} />
                                <p className="text-xs mt-1">{item.name}</p>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Fifth Section */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="flex flex-col items-center justify-center"
                >
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">VERSION CONTROLS</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {[{ img: github, name: "GitHub" }].map((item, index) => (
                            <span key={index} className="w-20 h-20 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex flex-col items-center justify-center rounded-md shadow-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-yellow-400 cursor-pointer duration-300 shadow-lg hover:shadow-xl">
                                <img className="w-10 h-8" src={item.img} alt={item.name} />
                                <p className="text-xs mt-1">{item.name}</p>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Sixth Section */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="flex flex-col items-center justify-center"
                >
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">OPERATING SYSTEM</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {[{ img: windows, name: "Windows" }, { img: linux, name: "Linux" }].map((item, index) => (
                            <span key={index} className="w-20 h-20 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex flex-col items-center justify-center rounded-md shadow-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-yellow-400 cursor-pointer duration-300 shadow-lg hover:shadow-xl">
                                <img className="w-10 h-8" src={item.img} alt={item.name} />
                                <p className="text-xs mt-1">{item.name}</p>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
