import { bannerImg } from "../../assets/index";
// import Media from "./Media";

const RightBanner = () => {
    return (
        <div className="w-full lg:w-1/2 flex flex-col items-center relative mt-10 lg:mt-0">
            {/* Image */}
            <div className="relative flex justify-center">
                <img
                    className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-auto z-10 rounded-lg shadow-xl"
                    src={bannerImg}
                    alt="bannerImg"
                />
                <div className="absolute bottom-0 w-[80%] h-[50%] bg-gradient-to-r from-[#1e2024] via-[#191b1e] to-[#202327] shadow-lg rounded-xl"></div>
            </div>

            {/* Media Component - Only Shows on Larger Screens */}
            <div className="hidden lg:flex justify-center mt-6">
                {/*<Media />*/}
            </div>
        </div>
    );
};

export default RightBanner;
