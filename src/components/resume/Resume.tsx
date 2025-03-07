import {  useState } from 'react'
import Title from '../layouts/Title.js';
import Education from './Education.js';


const Resume = () => {
   const [educationData, setEducationData] = useState(true);

  return (
      <section id="education"
               className="w-full h-full flex flex-col lgl:flex-row items-center justify-between px-5 md:px-10 border-b border-white font-titleFont bg-[#191b1e] pb-15">

          <div className="flex justify-center items-center text-center">
              <Title title=" " des="Education"/>
          </div>
          <div>
              <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                  <li
                      onClick={() =>
                          setEducationData(true)

                      }
                      className={`${
                          educationData
                              ? "border-designColor rounded-lg"
                              : "border-transparent"
                      } resumeLi`}
                  >
                  </li>
                  {/*</li>*/}
                  {/*<li*/}
                  {/*  onClick={() =>*/}
                  {/*    setEducationData(false) &*/}
                  {/*    setSkillData(true) &*/}
                  {/*    setExperienceData(false) &*/}
                  {/*    setAchievementData(false)*/}
                  {/*  }*/}
                  {/*  className={`${*/}
                  {/*    skillData ? "border-designColor rounded-lg" : "border-transparent"*/}
                  {/*  } resumeLi`}*/}
                  {/*>*/}
                  {/*  Professional Skills*/}
                  {/*</li>*/}
                  {/*<li*/}
                  {/*  onClick={() =>*/}
                  {/*    setEducationData(false) &*/}
                  {/*    setSkillData(false) &*/}
                  {/*    setExperienceData(true) &*/}
                  {/*    setAchievementData(false)*/}
                  {/*  }*/}
                  {/*  className={`${*/}
                  {/*    experienceData*/}
                  {/*      ? "border-designColor rounded-lg"*/}
                  {/*      : "border-transparent"*/}
                  {/*  } resumeLi`}*/}
                  {/*>*/}
                  {/*  Experience*/}
                  {/*</li>*/}
                  {/*<li*/}
                  {/*  onClick={() =>*/}
                  {/*    setEducationData(false) &*/}
                  {/*    setSkillData(false) &*/}
                  {/*    setExperienceData(false) &*/}
                  {/*    setAchievementData(true)*/}
                  {/*  }*/}
                  {/*  className={`${*/}
                  {/*    achievementData*/}
                  {/*      ? "border-designColor rounded-lg"*/}
                  {/*      : "border-transparent"*/}
                  {/*  } resumeLi`}*/}
                  {/*>*/}
                  {/*  Achievements*/}
                  {/*</li>*/}
              </ul>
          </div>
          {educationData && <Education/>}
          {/*{skillData && <Skills />}*/}
          {/*{achievementData && <Achievement />}*/}
          {/*{experienceData && <Experience />}*/}

      </section>
  );
}

export default Resume