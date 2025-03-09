import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';  // Import ResumeCard component

const Education = () => {
  return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="w-full flex flex-col gap-10 lgl:gap-20"
      >
        {/* part one */}
        <div className="w-full">
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            {/* You can add more content here */}
          </div>
          <div className="flex flex-col gap-12 relative w-full sm:w-auto">
            {/* Content here */}
            <ResumeCard
                title="Graduate Diploma in Software Engineering"
                subTitle="Institute of Software Engineering - IJSE (2023 - 2025)"
                result=""
                des="I am pursuing a Graduate Diploma in Software Engineering at the Institute of Software Engineering (IJSE) (2023–2025), specializing in Java as the main programming language. My studies include hands-on experience through assignments, in-class tests, module exams, and practical exams, equipping me with strong problem-solving and software development skills."
            />
            <ResumeCard
                title="G.C.E Advanced Level"
                subTitle="Physical Science Stream (2021)"
                result=""
                des="In 2021, I completed my Advanced Level exam in the Physics stream, studying Combined Mathematics, Physics, and Chemistry. These subjects enhanced my problem-solving, analytical, and scientific skills, providing a strong foundation in calculus, mechanics, electromagnetism, and chemistry for further studies in engineering, technology, or scientific research."
            />
            <ResumeCard
                title="G.C.E Ordinary Level"
                subTitle="2017"
                result=""
                des="I completed my G.C.E. Ordinary Level examination in 2017 at Dambulla Central College, successfully facing nine subjects. This education provided me with a strong academic foundation, enhancing my knowledge in key subjects while developing critical thinking, problem-solving, and analytical skills essential for higher studies and future career growth."
            />
          </div>
        </div>
      </motion.div>
  );
};

export default Education;
