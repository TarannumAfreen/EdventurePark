import React from "react";
import { useState } from "react";
import rocket from "../assets/images/desktop3/rocket.png";
import firstPic from "../assets/images/Home/1.png";
import ai1 from "../assets/images/Home/ai1.png";
import ai2 from "../assets/images/Home/ai2.png";
import cfi from "../assets/images/Home/CFI.png";
import google from "../assets/images/Home/google.png";
import thub from "../assets/images/Home/thub.png";
import wehub from "../assets/images/Home/wehub.png";
import news1 from "../assets/images/Home/news1.png";
import news2 from "../assets/images/Home/news2.png";
import news3 from "../assets/images/Home/news3.png";
import news4 from "../assets/images/Home/news4.png";
import EVPlogo from "../assets/images/Home/EVP logo (1) 1.png";

import PosterGrid from "./PosterGrid";
import Groupcollage from "./Groupcollage";
function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <center>
        <img src={firstPic} alt="Edventurepark-Aim" />
      </center>
      <PosterGrid />
      <div className="bg-emerald-600 p-4 mb-4">
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
      <div className="flex flex-col md:flex-row bg-white p-8 items-center justify-center">
        <div className="relative w-full md:w-1/2 flex flex-col bg-black rounded-md overflow-hidden">
          <img
            src={ai1}
            alt="Pre-Incubation"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 right-0 bg-emerald-600 opacity-70 h-full w-[80px] flex items-center justify-center">
            <p className="text-white text-2xl font-bold rotate-90">
              PRE INCUBATION
            </p>
          </div>
          <div className="p-6 text-white">
            <p className="text-sm md:text-base">
              Pre-Incubation Program Is A 13 Week Long Structure And Is An
              Intensive Program, Where The Startups Work On Their Ideas And
              Build Their MVP (Minimum Viable Product) Through A Series Of 8
              Tasks And Interactions With The Mentors From The Ecosystem!
            </p>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 flex flex-col bg-white rounded-md overflow-hidden mt-8 md:mt-0 md:ml-4">
          <img
            src={ai2}
            alt="Incubation"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 right-0 bg-emerald-600 opacity-70 h-full w-[80px] flex items-center justify-center">
            <p className="text-white text-2xl font-bold rotate-90">
              INCUBATION
            </p>
          </div>
          <div className="p-6 text-black">
            <p className="text-sm md:text-base">
              EdVenture Park's Incubation Program Ensures Startups Find Their
              Product-Market Fit (PMF) And Then Supports Expansion Through
              Personalized Strategies And Investor Connections. It's All About
              Individualized Growth And Securing Investments.
            </p>
          </div>
        </div>
      </div>
      <Groupcollage />
      <center>
        <p className="text-8xl font-semibold">How to apply</p>
      </center>
      <div className="flex justify-center items-center gap-12 mt-20">
        <div className="w-80 h-64 flex flex-col justify-center items-center border-4 border-black rounded-lg bg-emerald-600 p-4 rounded-lg mb-4">
          <strong className="text-4xl">Step 1</strong>
          <p className="text-2xl text-center mt-2">Fill online application</p>
        </div>

        <div className="w-80 h-64 flex flex-col justify-center items-center border-4 border-black rounded-lg bg-white text-black">
          <strong className="text-4xl">Step 2</strong>
          <p className="text-2xl text-center mt-2">Interview rounds</p>
        </div>

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
        <div className="w-80 h-64 flex flex-col justify-center items-center border-4 border-black rounded-lg bg-emerald-600 p-4 rounded-lg mb-4">
          <strong className="text-2xl" style={{ color: "black" }}>
            1:1 sessions
          </strong>
          <p className="text-xl text-center mt-2">
            Through a series of 8 tasks and interactions with the mentors from
            the ecosystem
          </p>
        </div>

        <div className="w-80 h-64 flex flex-col justify-center items-center border-4 border-black rounded-lg bg-white text-black">
          <strong className="text-2xl">Cohort sessions</strong>
          <p className="text-xl text-center mt-2">
            Through a series of 8 tasks and interactions with the mentors from
            the ecosystem
          </p>
        </div>

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
        <div className="w-80 h-64 flex flex-col justify-center items-center border-4 border-black rounded-lg bg-emerald-600 p-4 rounded-lg mb-4">
          <strong className="text-2xl" style={{ color: "black" }}>
            Investor pitches
          </strong>
          <p className="text-xl text-center mt-2">
            Through a series of 8 tasks and interactions with the mentors from
            the ecosystem
          </p>
        </div>

        <div className="w-80 h-64 flex flex-col justify-center items-center border-4 border-black rounded-lg bg-white text-black">
          <strong className="text-2xl">Market access</strong>
          <p className="text-xl text-center mt-2">
            Through a series of 8 tasks and interactions with the mentors from
            the ecosystem
          </p>
        </div>

        <div className="w-80 h-64 flex flex-col justify-center items-center border-4 border-black rounded-lg bg-emerald-600 p-4 rounded-lg mb-4">
          <strong className="text-2xl" style={{ color: "black" }}>
            Exclusive workshops{" "}
          </strong>
          <p className="text-xl text-center mt-2">
            Through a series of 8 tasks and interactions with the mentors from
            the ecosystem
          </p>
        </div>
      </div>
      <center>
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-[clamp(2rem,8vw,8rem)] font-black tracking-tighter leading-none text-neutral-900 uppercase">
            turn your ideas
          </h1>
        </div>
      </center>
      <p
        className="text-3xl md:text-4xl lg:text-5xl  mb-4"
        style={{ color: "black" }}
      >
        Our <strong>Partners</strong>
      </p>
      <div className="flex space-x-4">
        <img src={google} alt="Rocket" className="w-80 h-auto" />
        <img src={thub} alt="Rocket" className="w-80 h-auto" />
        <img src={wehub} alt="Rocket" className="w-80 h-auto" />
        <img src={cfi} alt="Rocket" className="w-80 h-auto" />
      </div>
      <br /> <br />
      <br />
      <br />
      <p className="text-5xl">
        Our Startups are making <strong>headlines</strong>{" "}
      </p>
      <br />
      <div className="grid grid-cols-2 gap-4 p-4 m-4">
        <img src={news1} className="h-auto" />
        <img src={news2} className="h-auto" />
        <img src={news3} className="h-auto" />
        <img src={news4} className="h-auto" />
      </div>
      <div className="w-full max-w-5xl px-4 py-4 flex items-start gap-6">
        <div className="flex-1">
          <h1 className="text-[clamp(1rem,5vw,3rem)] font-black tracking-tight leading-snug text-neutral-900 uppercase">
            Frequently asked questions
          </h1>
          <div className="w-full max-w-3xl mx-auto p-6">
            <div className="space-y-4">
              <div className="border rounded-lg px-6 py-4 border-neutral-200">
                <button
                  className="w-full text-left text-xl font-semibold hover:no-underline"
                  onClick={() => toggleAnswer(1)}
                >
                  What is the difference between a UI and UX Designer?
                </button>
                {openIndex === 1 && (
                  <div className="text-neutral-600 mt-2">Coming SOON</div>
                )}
              </div>

              <div className="border rounded-lg px-6 py-4 border-neutral-200">
                <button
                  className="w-full text-left text-xl font-semibold hover:no-underline"
                  onClick={() => toggleAnswer(2)}
                >
                  How to become a UI designer?
                </button>
                {openIndex === 2 && (
                  <div className="text-neutral-600 mt-2">Coming SOON</div>
                )}
              </div>

              <div className="border rounded-lg px-6 py-4 border-neutral-200">
                <button
                  className="w-full text-left text-xl font-semibold hover:no-underline"
                  onClick={() => toggleAnswer(3)}
                >
                  What is the best UI design tool?
                </button>
                {openIndex === 3 && (
                  <div className="text-neutral-600 mt-2">Coming SOON</div>
                )}
              </div>

              <div className="border rounded-lg px-6 py-4 border-neutral-200">
                <button
                  className="w-full text-left text-xl font-semibold hover:no-underline"
                  onClick={() => toggleAnswer(4)}
                >
                  What is the best place to learn Figma?
                </button>
                {openIndex === 4 && (
                  <div className="text-neutral-600 mt-2">Coming SOON</div>
                )}
              </div>

              <div className="border rounded-lg px-6 py-4 border-neutral-200">
                <button
                  className="w-full text-left text-xl font-semibold hover:no-underline"
                  onClick={() => toggleAnswer(5)}
                >
                  Should designers code?
                </button>
                {openIndex === 5 && (
                  <div className="text-neutral-600 mt-2">Coming SOON</div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start ml-auto mr-auto">
          <div className="flex flex-col items-center text-center">
            <img
              src={EVPlogo}
              alt="EVP Logo"
              className="w-[200px] h-auto mb-4"
            />
            <p className="text-xl font-semibold text-neutral-700">Fly with</p>
            <p className="text-3xl font-extrabold text-neutral-900">
              Edventure Park
            </p>
          </div>
        </div>
      </div>
      <div className="bg-emerald-600 flex flex-col items-center py-24 w-full">
        <h2 className="text-center font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-black max-w-3xl px-4">
          <span className="font-bold">We fund great ideas.</span>
          <br />
          <span className="text-5xl">Let yours be the next!</span>
        </h2>
      </div>
    </>
  );
}

export default Home;
