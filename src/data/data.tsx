import { AiFillAppstore } from "react-icons/ai";
import { FaMobile} from "react-icons/fa";
import {SiAntdesign} from "react-icons/si";
import { BsDatabase} from "react-icons/bs";
import {BiGlobe} from "react-icons/bi";
import {RiServerFill} from "react-icons/ri";



// Features Data
export const featuresData = [
    {
        id: 1,
        icon: <AiFillAppstore />,
        title: "Web Development",
        des: "I create dynamic, responsive, and user-friendly websites using modern technologies like React, Next.js, and Tailwind CSS, ensuring seamless performance across all devices.",
    },

    {
        id: 2,
        icon: <RiServerFill />, // Better matching icon for backend
        title: "Backend Development",
        des: "Building scalable and high-performance backend systems using Spring Boot and Node.js for seamless data processing and API management.",
    },



    {
        id: 4,
        icon: <FaMobile />,
        title: "Mobile Development",
        des: "I specialize in building high-performance mobile applications using React Native, delivering cross-platform solutions for both iOS and Android.",
    },

    {
        id: 5,
        icon: <SiAntdesign />,
        title: "UI/UX Design",
        des: "I design intuitive and visually appealing user interfaces, focusing on user experience and accessibility to create seamless digital interactions.",
    },

    {
        id: 6,
        icon: <BsDatabase />,
        title: "Database Design",
        des: "I design efficient and scalable database systems using MySQL for relational data and MongoDB for flexible, NoSQL storage solutions."
    },

    {
        id: 7,
        icon: <BiGlobe />,
        title: "API Integration",
        des: "I develop and integrate robust APIs, enabling seamless communication between different systems, ensuring scalability and efficient data exchange."
    }



];
