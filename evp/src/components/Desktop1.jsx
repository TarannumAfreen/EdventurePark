import React from "react";
import meraj from "../assets/images/desktop1/meraj.png"
import xTeam from "../assets/images/desktop1/executive team.png"
import cl from "../assets/images/desktop1/bottomlast.png"
import coreteam from "../assets/images/desktop1/core team.png"
const Desktop1 = () => {
  return (
    <div className="bg-white p-0 w-full overflow-x-hidden">
      <div className="relative flex flex-col items-center w-full max-w-[2811.5px] justify-start">
        <div className="mx-4 md:mx-8 lg:mx-12 mt-8 text-center font-bold text-2xl md:text-4xl lg:text-5xl tracking-tight leading-tight text-black mb-10 font-[Black_Mango]">
          About Us
        </div>

        <div className="mx-4 md:mx-10 lg:mx-20 mb-8">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8 font-[Black_Mango]">
            Incubation India - for the World!
          </h2>
          <p className="font-medium leading-relaxed font-poppins text-left text-xl">
            Edventure Park is a student-focused idea-stage startup <br />{" "}
            incubator aiming to empower student-led startups <br /> through an
            intensive 4-month pre-incubation program.
          </p>
          <img
            src="https://via.placeholder.com/500x450.png?text=CEO+Image+Placeholder"
            alt="Core Team"
            className="w-[300px] md:w-[500px] h-[450px] object-cover rounded-lg mb-4"
          />
          <p className="font-medium leading-relaxed font-poppins text-left text-xl">
            Welcome to Edventure Park, where student-driven innovation knows no
            limits and where we incubate India's brightest ideas for the world.
            Within our walls, students find the freedom to experiment, the
            ecourage to learn from failures, and support they need to thrive.
            Edventure Park isn't just an incubator; it's a launchpad for the
            next generation of entrepreneurs.
          </p>
        </div>

        <div className="mx-4 md:mx-10 lg:mx-20 mb-8">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8 font-[Black_Mango]">
            The Man Behind It All - Our CEO
          </h2>
          <div className="bg-emerald-600 p-4 rounded-lg mb-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                <img
                  src={meraj}
                  alt="CEO Portrait"
                  className="w-full h-[450px] object-cover rounded-lg"
                />
              </div>

              <div className="w-full md:w-1/2 text-white">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  "YOUR TIME HAS COME, AND THE SHOW IS ON!"
                </p>
                <p className="text-xl">
                  - Meraj Faheem, Founder & CEO,
                  <br />
                  EdVenture Park, The Hacking School, Code for India
                </p>
              </div>
            </div>
          </div>
          <p className="font-medium leading-relaxed font-poppins text-left text-xl">
            Meraj Faheem is a serial entrepreneur, who started first as a
            student entrepreneur. He founded India's first coding bootcamp - The
            Hacking School (acquired by iCollege Australia), Code.in, Code For
            India, Maths.ai. He Founded India's first student-focused startup
            incubator - EdVenture Park. Meraj is an Innovation Fellow with Govt.
            of Telangana. He also consults with various state Govts., primarily
            to help them set up incubation centers and Makerspaces. He's
            passionate about education, technology, and student
            entrepreneurship.
          </p>
        </div>

        <div className="mx-4 md:mx-10 lg:mx-20 mb-8">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8 font-[Black_Mango]">
            EdVenture Park's Culture Formula
          </h2>

          <div className="flex flex-wrap gap-4">
            <div className="bg-green-500 text-white text-center py-6 px-4 rounded-lg flex-grow">
              The more you do, the more you do
            </div>
            <div className="bg-purple-700 text-white text-center py-6 px-4 rounded-lg flex-grow">
              Reject Privilege
            </div>
            <div className="bg-yellow-600 text-white text-center py-6 px-4 rounded-lg flex-grow">
              Great ideas can come from anywhere
            </div>
            <div className="bg-orange-600 text-white text-center py-6 px-4 rounded-lg flex-grow">
              Earn the right to question
            </div>
          </div>
        </div>

        <div className="mx-4 md:mx-10 lg:mx-20 mb-8">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8 font-[Black_Mango]">
            Board of Directors
          </h2>
          <div className="mx-4 md:mx-10 lg:mx-20 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/500x450.png?text=Image+Placeholder"
                  alt="Team Member 1"
                  className="w-full h-[450px] object-cover rounded-lg"
                />
                <p className="mt-4 text-center font-medium text-lg">Member 1</p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/500x450.png?text=Image+Placeholder"
                  alt="Team Member 2"
                  className="w-full h-[450px] object-cover rounded-lg"
                />
                <p className="mt-4 text-center font-medium text-lg">Member 2</p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/500x450.png?text=Image+Placeholder"
                  alt="Team Member 3"
                  className="w-full h-[450px] object-cover rounded-lg"
                />
                <p className="mt-4 text-center font-medium text-lg">Member 3</p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/500x450.png?text=Image+Placeholder"
                  alt="Team Member 4"
                  className="w-full h-[450px] object-cover rounded-lg"
                />
                <p className="mt-4 text-center font-medium text-lg">Member 4</p>
              </div>
            </div>
            <div className="w-full max-w-7xl mx-auto px-4 py-8">
              <h1 className="text-[clamp(2rem,8vw,8rem)] font-black tracking-tighter leading-none text-neutral-900 uppercase">
                Raising Unicorns
              </h1>
            </div>
          </div>

          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8 font-[Black_Mango]">
            Our Core Team
          </h2>
          <p className="font-medium leading-relaxed font-poppins text-left text-xl">
            At the heart of Edventure Park, you'll find our dedicated Core Team,
            the driving force behind the dynamic engine that is Edventure Park.
            they take charge of running the operations, funding initiatives, and
            executing our pre-incubation program.
          </p>
          <br />
          <div className="flex justify-center items-center">
  <img
    src={coreteam}
    alt="Core Team"
    className="w-[90%] max-w-[1200px] h-auto object-cover rounded-lg mb-4"
  />
</div>
        </div>

        <div className="mx-4 md:mx-10 lg:mx-20 mb-8">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8 font-[Black_Mango]">
            Our Executive Team
          </h2>
          <p className="font-medium leading-relaxed font-poppins text-left text-xl">
            when it comes to exponential growth and taking startups to new
            heights, our X team is the "X" factor. They are the multipliers that
            propel student founders beyound expectations. These creative minds
            bring their expertise to the table whenever it's needed, working
            alongside students founders to help them transform their ideas into
            thriving startups.
          </p>
          <br />
          <div className="flex justify-center items-center">
  <img
    src={xTeam}
    alt="Core Team"
    className="w-[90%] max-w-[1200px] h-auto object-cover rounded-lg mb-4"
  />
</div>
          {/* <img
            src="https://via.placeholder.com/500x450.png?text=CEO+Image+Placeholder"
            alt="Core Team"
            className="w-[300px] md:w-[500px] h-[450px] object-cover rounded-lg mb-4"
          /> */}
        </div>

        <div className="mx-4 md:mx-10 lg:mx-20 mb-8">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8 font-[Black_Mango]">
            Our Campus Leads
          </h2>
          <p className="font-medium leading-relaxed font-poppins text-left text-xl">
            Our Campus Leads are the backbone of our community - the CEOs OF
            EdVenture Park within their respective campuses. These students have
            exclusive access to the abundant resources offered by EdVenture
            Park, creating opportunitiesfor them to experiment, learn, and
            thrive.
            
          </p><br />
          <div className="flex justify-center items-center">
  <img
    src={cl}
    alt="Core Team"
    className="w-[90%] max-w-[1200px] h-auto object-cover rounded-lg mb-4"
  />
</div>
        </div>

        <div className="bg-emerald-600 flex flex-col items-center py-24 w-full">
          <h2 className="text-center font-poppins font-semibold text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight text-black max-w-4xl">
            Become the{" "}
            <span className="font-bold">
              CEO
              <br />
              EdVenture Park
            </span>{" "}
            of at your campus!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Desktop1;
