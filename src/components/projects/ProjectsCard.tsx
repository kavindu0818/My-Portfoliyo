import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

interface ProjectsCardProps {
    title: string;
    des: string;
    src: string;
    githubLink: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ title, des, src, githubLink }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
        >
            <motion.div
                className="w-full h-[80%] overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <img
                    className="w-full h-60 object-cover cursor-pointer"
                    src={src}
                    alt="src"
                />
            </motion.div>
            <div className="w-full mt-5 flex flex-col gap-6">
                <div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-base uppercase text-designColor text-yellow-400 font-normal">
                            {title}
                        </h3>
                        <div className="flex gap-2 top-44">
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                            >
                                <BsGithub />
                            </a>
                        </div>
                    </div>
                    <p className="text-sm text-white tracking-wide mt-3 hover:text-gray-100 duration-300">
                        {des}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectsCard;