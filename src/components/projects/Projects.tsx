import Title from '../layouts/Title.js';
import {
  studentManagement,
  lib,
  game,
  car,
  projectthree,
  mic,
} from "../../assets/ProjectImage.ts";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
      <section id="projects" className="w-full h-full flex flex-col lgl:flex-row items-center justify-between px-5 md:px-10 border-b border-white font-titleFont bg-[#191b1e] pb-15">
        <div className="flex justify-center items-center text-center">
          <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
              title="Student Management System"
              des="The Student Management System manages students, fees, staff, attendance, and emails. Built with JavaFX, Java (Layered Architecture), and MySQL, it ensures secure, efficient management with role-based access control and automated fee alerts."
              src={studentManagement}
              githubLink="https://github.com/kavindu0818/Institute-Management-System-Layarde-Architecture.git"
          />
          <ProjectsCard
              title="Library Management System"
              des="The Library Management System streamlines book management, member registration, and transactions. Built with JavaFX, MySQL, and Hibernate ORM, it enables book issuance, returns, tracking, and reporting for efficient library operations and insights."
              src={lib}
              githubLink="https://github.com/kavindu0818/Library-Management-System.git"
          />
          <ProjectsCard
              title="2D Game"
              des="A side-scrolling platformer where players navigate landscapes, overcome obstacles, and collect points. Built with HTML, CSS, and JavaScript, it features smooth movement, collision detection, scoring, and interactive scrolling backgrounds for an engaging experience."
              src={game}
              githubLink="https://github.com/kavindu0818/2D-Game.git"
          />
          <ProjectsCard
              title="Car Rental Management System"
              des="A car rental management system for managing cars, customers, bookings, and history. Built with React.js, Spring Boot, JWT, and MongoDB, it enables efficient car management, secure booking processing, and streamlined customer data handling."
              src={car}
              githubLink="https://github.com/kavindu0818/Car-Rental-Management-PosSytem.git"
          />
          <ProjectsCard
              title="Music Player App"
              des="A music player app to play songs, add favorites, search, and manage a music library. Built with React Native (Expo), Node.js, and MySQL, it offers a seamless and user-friendly audio experience."
              src={projectthree}
              githubLink="https://github.com/kavindu0818/Music-Player-React-Native.git"
          />
          <ProjectsCard
              title="Voice Assistance"
              des="A voice assistance system that listens to commands, searches for information and YouTube videos, and provides up-to-date responses via Wikipedia for quick, hands-free access. Built with Python for efficient processing."
              src={mic}
              githubLink="https://github.com/kavindu0818/Voice--Assistant.git"
          />
        </div>
      </section>
  );
};

export default Projects;
