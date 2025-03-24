import React, { useState } from 'react';
import { Trophy, Medal, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import circle1 from "../../assets/achive/cricle1.jpg"
import circle2 from "../../assets/achive/circle2.jpg"
import circle3 from "../../assets/achive/circle3.jpg"
// import ino1 from "../../assets/achive/ino1.jpg"
import ino2 from "../../assets/achive/ino2.jpg"

interface Achievement {
    id: number;
    title: string;
    competition: string;
    date: string;
    description: string;
    images: string[];
    icon: React.ReactNode;
}

const achievements: Achievement[] = [
    {
        id: 1,
        title: "Best Work Place",
        competition: "Inovesta",
        date: "2023",
        description: "Our team received the Best Workplace Award at Innovesta 2023 for our outstanding teamwork and collaboration on MAGNA, an innovative Car Rental System focused on enhancing vehicle security and driver safety. The project integrated eye detection to ensure driver attentiveness, alcohol detection to prevent intoxicated driving, and real-time speed monitoring to improve road safety. This achievement highlights our ability to work effectively as a team while developing cutting-edge solutions for the car rental industry.",
        images: [
            ino2,
            // ino1,  // Use the imported image variable
            // circle3
        ],

        icon: <Trophy className="w-8 h-8 text-yellow-500" />
    },
    {
        id: 2,
        title: "Secound Place Winner",
        competition: " 𝐂𝐢𝐫𝐜𝐥𝐞 𝐄𝐝𝐠𝐞",
        date: "2024",
        description: "Our team won Secound place at the 2024 Circle Edge Innovative Idea Competition for MediFlow, a smart Health Management System that streamlines patient records, clinic management, doctor bookings, and medical report access. Our innovative solution enhances efficiency and accessibility in healthcare.",
        images: [
            circle1,  // Use the imported image variable
            circle2,
            circle3
        ],
        icon: <Medal className="w-8 h-8 text-blue-500" />
    },
    // {
    //     // id: 3,
    //     // title: "Excellence in Design",
    //     // competition: "UX/UI Design Championships 2024",
    //     // date: "February 2024",
    //     // description: "Created an innovative design system that transforms user experience in educational platforms. Recognized for exceptional creativity and accessibility implementation.",
    //     // images: [
    //     //     "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070",
    //     //     "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=2070",
    //     //     "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80&w=2070"
    //     // ],
    //     // icon: <Award className="w-8 h-8 text-purple-500" />
    // }
];

function ImageCarousel({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative h-48 overflow-hidden group">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                />
            </AnimatePresence>

            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
            />

            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={prevImage}
                    className="p-2 rounded-full bg-gray-900/80 text-white hover:bg-gray-800 transition-colors"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextImage}
                    className="p-2 rounded-full bg-gray-900/80 text-white hover:bg-gray-800 transition-colors"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

function Achivements() {
    return (
        <div className="min-h-screen bg-[#191b1e] from-gray-900 to-gray-800 text-white py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="text-center mb-16"
                >

                    <p className="text-yellow-400 text-xl">Celebrating milestones and recognition</p>
                    <h1 className="text-5xl font-bold mb-4 bg-white bg-clip-text text-transparent">
                        Achievements
                    </h1>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-gradient-to-r from-bodyColor to-[#202327] rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                        >
                            <div className="relative">
                                <ImageCarousel images={achievement.images} />
                                <motion.div
                                    className="absolute top-4 right-4 bg-gray-900/80 p-2 rounded-full z-10"
                                    whileHover={{
                                        rotate: 360,
                                        transition: { duration: 0.6 }
                                    }}
                                >
                                    {achievement.icon}
                                </motion.div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-semibold px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    {achievement.date}
                  </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-yellow-400">{achievement.title}</h3>
                                <h4 className="text-lg font-semibold mb-3 text-white">{achievement.competition}</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    {achievement.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Achivements;