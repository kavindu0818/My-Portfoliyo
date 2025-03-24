import Title from "../layouts/Title";
import { quote } from "../../assets";
import about  from "../../assets/images/about.png";

const Aboutme = () => {
  return (
      <section
          id="features"
          className="w-full min-h-screen flex flex-col items-center justify-center px-5 md:px-10 border-b border-white font-titleFont bg-[#191b1e] pb-10"
      >
        {/* Title */}
        <div className="flex justify-center items-center text-center mb-8">
          <Title title="A little bit about who I am" des="About Me" />
        </div>

        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-10">
          {/* Left Section */}
          <div className="w-full sm:w-3/4 md:w-1/2 lg:w-[35%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 sm:p-8 rounded-lg shadow-lg border border-gray-700 flex flex-col items-center gap-6">
            <img
                className="w-full h-[350px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full rounded-lg object-cover"
                src={about}
                alt="Profile"
            />
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white">Kavindu Madhuranga</h3>
              <p className="text-base text-yellow-400">Full Stack Developer</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full sm:w-3/4 md:w-1/2 lg:w-[50%] flex flex-col items-center lg:items-start">
            <img className="w-10 sm:w-30 mb-4" src={quote} alt="Quote" />

            <div className="w-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 sm:p-8 rounded-lg shadow-lg">
              {/* Stars */}
              {/*<div className="flex justify-center lg:justify-start text-yellow-500 text-lg gap-1">*/}
              {/*  <RiStarFill />*/}
              {/*  <RiStarFill />*/}
              {/*  <RiStarFill />*/}
              {/*  <RiStarFill />*/}
              {/*  <RiStarFill />*/}
              {/*</div>*/}

              {/* Intro Text */}
              <p className="text-sm sm:text-base text-gray-400 mt-3 text-center lg:text-left">
                Hello! I'm Kavindu Madhuranga Wijerathna, a passionate software engineering student at
                IJSE (Institute of Software Engineering), Course ID GDSE 67, from Sri Lanka. My journey
                into software engineering started with a deep curiosity about how things work behind the
                screen. Since then, there has been no turning back.
              </p>

              {/* Personal Details */}
              <div className="mt-4 text-gray-400 text-sm sm:text-base leading-6">
                <p><strong>Name:</strong> Kavindu Madhuranga Wijerathna</p>
                <p><strong>Birthday:</strong> August 18, 2001</p>
                <p><strong>Address:</strong> No 159, Sigirimulla, Dambulla</p>
                <p><strong>Email:</strong> kavindumaduranga184@gmail.com</p>
                <p><strong>Phone:</strong> +94 774 257 738</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Aboutme;
