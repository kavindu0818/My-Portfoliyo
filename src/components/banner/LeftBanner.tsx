import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner: React.FC = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
      <div className="w-full lg:w-1/2 flex flex-col top-30 relative gap-8 text-center lg:text-left px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-normal text-white">WELCOME TO MY WORLD</h4>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Hi, I'm <span className="text-yellow-400 capitalize">Madhuranga</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor cursorBlinking={false} cursorStyle="|" cursorColor="rgb(250 204 21)" />
          </h2>
          <p className="text-sm sm:text-base leading-6 tracking-wide text-gray-300 max-w-[85%] mx-auto lg:mx-0">
            As a tech enthusiast, I’m always excited to explore new ideas and trends in the digital world. I love staying updated on the latest advancements and discovering the cool innovations in technology.
          </p>

          {/* Download CV Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="w-40 h-10 bg-bodyColor text-white font-bold border border-white rounded-b-2xl
          hover:bg-yellow-400 hover:scale-105 transition-all duration-300 hover:text-black">
              Download CV
            </button>
          </div>

          {/* Media Component - Now correctly positioned below the button */}
          <div className="mt-6">
            <Media />
          </div>
        </div>
      </div>
  );
};

export default LeftBanner;
