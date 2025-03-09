import Title from "../layouts/Title";
import Card from "./Card.js";
import { featuresData } from "../../data/data";

const Features = () => {
    return (
        <section
            id="services"
            className="w-full h-full flex flex-col items-center justify-center px-5 md:px-10 border-b border-white font-titleFont bg-[#191b1e] pb-16"
        >
            {/* Centered Title */}
            <div className="w-full flex justify-center text-center">
                <Title title="What I can do for you" des="Services" />
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20 mt-8">
                {featuresData.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </section>
    );
};

export default Features;
