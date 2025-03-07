import {FaFacebookF, FaLinkedinIn, FaGithub} from "react-icons/fa";
import logo from "../../assets/images/nav/navProfile.png";
import FooterBottom from "./FooterBottom.tsx";

const Footer = () => {
  return (
      <div className="w-full flex flex-col items-center justify-between px-5 md:px-10 border-t border-white font-titleFont bg-[#191b1e] py-8">
        {/* Logo Section */}
        <div className="w-full flex flex-col items-center gap-6">
          <img className="w-32" src={logo} alt="logo" />

          {/* Social Icons */}
            <div className="flex gap-4">

                <a
                    href="https://www.facebook.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-black bg-opacity-25 text-gray-200
                          text-xl inline-flex items-center justify-center
                          rounded-md hover:bg-opacity-40
                          hover:-translate-y-1 transition-all
                          hover:text-yellow-400 cursor-pointer duration-300
                          shadow-lg hover:shadow-xl"
                >
                    <FaFacebookF/>
                </a>
                <a
                    href="https://github.com/kavindu0818"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-black bg-opacity-25 text-gray-200
                          text-xl inline-flex items-center justify-center
                          rounded-md hover:bg-opacity-40
                          hover:-translate-y-1 transition-all
                          hover:text-yellow-400 cursor-pointer duration-300
                          shadow-lg hover:shadow-xl"
                >
                    <FaGithub/>
                </a>

                <a
                    href="https://www.linkedin.com/in/kavindu-madhuranga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-black bg-opacity-25 text-gray-200
                          text-xl inline-flex items-center justify-center
                          rounded-md hover:bg-opacity-40
                          hover:-translate-y-1 transition-all
                          hover:text-yellow-400 cursor-pointer duration-300
                          shadow-lg hover:shadow-xl"
                >
                    <FaLinkedinIn/>
                </a>
            </div>
        </div>

          {/* Footer Bottom */}
          <FooterBottom/>
      </div>
  );
};

export default Footer;