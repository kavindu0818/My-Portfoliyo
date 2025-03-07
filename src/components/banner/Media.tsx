import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Media = () => {
    return (
        <div className="flex flex-col items-center lg:items-start gap-4">
            {/* Social Media Links */}
            <h2 className="text-base uppercase font-titleFont text-gray-400">
                Find me on
            </h2>
            <div className="flex gap-4">
                <a
                    href="https://www.facebook.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-black bg-opacity-25 text-gray-200
                        text-xl flex items-center justify-center rounded-md
                        hover:bg-opacity-40 hover:-translate-y-1 transition-all
                        hover:text-yellow-400 cursor-pointer duration-300 shadow-lg"
                >
                    <FaFacebookF />
                </a>
                <a
                    href="https://github.com/kavindu0818"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-black bg-opacity-25 text-gray-200
                        text-xl flex items-center justify-center rounded-md
                        hover:bg-opacity-40 hover:-translate-y-1 transition-all
                        hover:text-yellow-400 cursor-pointer duration-300 shadow-lg"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/kavindu-madhuranga-67938125a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-black bg-opacity-25 text-gray-200
                        text-xl flex items-center justify-center rounded-md
                        hover:bg-opacity-40 hover:-translate-y-1 transition-all
                        hover:text-yellow-400 cursor-pointer duration-300 shadow-lg"
                >
                    <FaLinkedinIn />
                </a>
            </div>
        </div>
    );
};

export default Media;
