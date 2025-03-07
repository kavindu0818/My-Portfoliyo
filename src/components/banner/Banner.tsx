import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
// import Media from "./Media.tsx";

const Banner = () => {
    return (
        <section
            id="home"
            className="w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-5 sm:px-8 md:px-12 lg:px-16 border-b border-white font-titleFont bg-[#191b1e] overflow-hidden pb-10"
        >
            {/* Left Banner (Text & Media) - Appears Below Image on Mobile */}
            <LeftBanner />

            {/* Right Banner (Image) */}
            <RightBanner />
            {/*<Media/>*/}

        </section>
    );
};

export default Banner;
