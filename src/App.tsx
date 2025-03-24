
import Navbar from "./components/navbar/Navbar.tsx";
import Banner from "./components/banner/Banner.tsx";
import Aboutme from "./components/tesimonial/Aboutme.tsx";
import Resume from "./components/resume/Resume.tsx";
import Features from "./components/features/Features.tsx";
import Projects from "./components/projects/Projects.tsx";
import Contact from "./components/contact/Contact.tsx";
import Skills from "./skills/Skills.tsx";
import Footer from "./components/footer/Footer.tsx";
import Achivements from "./components/Acchivement/Achivements.tsx";

function App() {

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Aboutme></Aboutme>
            {/*<Education></Education>*/}
            <Resume></Resume>
            <Skills></Skills>
            <Features></Features>
            <Projects></Projects>
            <Achivements></Achivements>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default App
