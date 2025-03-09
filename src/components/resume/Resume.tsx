import { useState } from 'react';
import Title from '../layouts/Title.js';
import Education from './Education.js';

const Resume = () => {
    const [educationData, setEducationData] = useState(true);

    return (
        <section
            id="education"
            className="w-full h-full flex flex-col items-center justify-between px-5 md:px-10 border-b border-white font-titleFont bg-[#191b1e] pb-15"
        >
            <div className="flex justify-center items-center text-center -mb-20">
                <Title title="My academic background and qualifications" des="Education"/>
            </div>
            <div className="w-full">
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"> {/* Reduced gap to 4 */}
                    <li
                        onClick={() => setEducationData(true)}
                        className={`${
                            educationData ? "border-designColor rounded-lg" : "border-transparent"
                        } resumeLi cursor-pointer py-2 text-center`}
                    >
                        Education
                    </li>
                    {/* Add other sections like Skills, Experience, etc., if needed */}
                </ul>
            </div>
            {educationData && <Education />}
        </section>
    );
}

export default Resume;
