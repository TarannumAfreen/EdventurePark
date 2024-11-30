import React from "react";
import rocket from "../assets/images/desktop3/rocket.png";
function Home() {
  return (
    <>
      <div className="bg-emerald-600 p-4 rounded-lg mb-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-white">
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              450+
            </p>
            <p
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "black" }}
            >
              Student entrepreneurs
            </p>
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              9 Million
            </p>
            <p
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "black" }}
            >
              Investment Raised
            </p>
          </div>
        </div>
      </div>
      <div className="bg-emerald-600 p-4 rounded-lg mb-4">
        <div className="flex flex-col md:flex-row items-center">
          <h2>images</h2>
        </div>
      </div>
      <center>
        <p className="text-8xl font-semibold">How to apply</p>
      </center>
      <div className="flex justify-center items-center gap-12 mt-20">
        {/* Step 1 */}
        <div className="w-80 h-64 flex flex-col justify-center items-center border-4 border-black rounded-lg bg-emerald-600 p-4 rounded-lg mb-4">
          <strong className="text-4xl">Step 1</strong>
          <p className="text-2xl text-center mt-2">Fill online application</p>
        </div>

        {/* Step 2 */}
        <div className="w-80 h-64 flex flex-col justify-center items-center border-4 border-black rounded-lg bg-white text-black">
          <strong className="text-4xl">Step 2</strong>
          <p className="text-2xl text-center mt-2">Interview rounds</p>
        </div>

        {/* Step 3 */}
        <div className="w-80 h-64 flex flex-col justify-center items-center border-4 border-black rounded-lg bg-emerald-600 p-4 rounded-lg mb-4">
          <strong className="text-4xl">Step 3</strong>
          <p className="text-2xl text-center mt-2">Selection</p>
        </div>
      </div>
      <center>
      <img
        src={rocket}
        alt="Rocket"
        className="w-[300px] sm:w-[600px] md:w-[800px] mb-8 "
      />
        <p className="text-8xl font-semibold">What to expect</p>
      </center>
      <div className="flex justify-center items-center gap-12 mt-20">
        {/* Step 1 */}
        <div className="w-80 h-64 flex flex-col justify-center items-center border-4 border-black rounded-lg bg-emerald-600 p-4 rounded-lg mb-4">
          <strong className="text-2xl" style={{ color: "black" }}>
            1:1 sessions
          </strong>
          <p className="text-xl text-center mt-2">
            Through a series of 8 tasks and interactions with the mentors from
            the ecosystem
          </p>
        </div>

        {/* Step 2 */}
        <div className="w-80 h-64 flex flex-col justify-center items-center border-4 border-black rounded-lg bg-white text-black">
          <strong className="text-2xl">Cohort sessions</strong>
          <p className="text-xl text-center mt-2">
            Through a series of 8 tasks and interactions with the mentors from
            the ecosystem
          </p>
        </div>

        {/* Step 3 */}
        <div className="w-80 h-64 flex flex-col justify-center items-center border-4 border-black rounded-lg bg-emerald-600 p-4 rounded-lg mb-4">
          <strong className="text-2xl" style={{ color: "black" }}>
            Buddy support{" "}
          </strong>
          <p className="text-xl text-center mt-2">
            Through a series of 8 tasks and interactions with the mentors from
            the ecosystem
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-12 mt-20">
        {/* Step 1 */}
        <div className="w-80 h-64 flex flex-col justify-center items-center border-4 border-black rounded-lg bg-emerald-600 p-4 rounded-lg mb-4">
          <strong className="text-2xl" style={{ color: "black" }}>
            Investor pitches
          </strong>
          <p className="text-xl text-center mt-2">
            Through a series of 8 tasks and interactions with the mentors from
            the ecosystem
          </p>
        </div>

        {/* Step 2 */}
        <div className="w-80 h-64 flex flex-col justify-center items-center border-4 border-black rounded-lg bg-white text-black">
          <strong className="text-2xl">Market access</strong>
          <p className="text-xl text-center mt-2">
          Through a series of 8 tasks and interactions with the mentors from the ecosystem
          </p>
        </div>

        {/* Step 3 */}
        <div className="w-80 h-64 flex flex-col justify-center items-center border-4 border-black rounded-lg bg-emerald-600 p-4 rounded-lg mb-4">
          <strong className="text-2xl" style={{ color: "black" }}>
          Exclusive workshops{" "}
          </strong>
          <p className="text-xl text-center mt-2">
          Through a series of 8 tasks and interactions with the mentors from the ecosystem
          </p>
        </div>
      </div>
      
      <center><div className="w-full max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-[clamp(2rem,8vw,8rem)] font-black tracking-tighter leading-none text-neutral-900 uppercase">
          turn your ideas
        </h1>
      </div></center>
     <center> <img
                  src="/placeholder.svg"
                  alt="CEO Portrait"
                  className="w-full h-[450px] object-cover rounded-lg"
                /></center>
                <p className="text-5xl">Our Startups are making <strong>headlines</strong> </p>
    </>
  );
}

export default Home;
