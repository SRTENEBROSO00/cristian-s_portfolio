import React from "react";
import undraw from "../assets/img/undrawLaptop.png";

const Home = () => {
  return (
    <div className=" w-full flex justify-start items-center flex-col animate-fadeIn">
      <div className=" h-52 flex justify-center items-center">
        <p className="font-italiana font-extralight text-4xl m-10 w-96 text-center">
          My Portfolio
        </p>
      </div>

      <main className="grid grid-cols-15 gap-4 h-4/6 place-items-center">
        {/* Primera columna (text box) */}
        <div className="col-start-2 col-span-6 w-6/6 h-3/6 p-4 flex flex-col items-start justify-around">
          <p className="">Hi, there!👋</p>
          <h2 className="font-extralight font-italiana text-5xl w-3/4  ">
            Welcome, I'm Cristian Castro
          </h2>
          <p className="w-3/4 text-1xl text-justify">I am
            <span className="text-orange-400 "> Software Developer</span> born in the Dominican Republic in 2003. My passion is frontend development, although I am very interested in learning backend and cybersecurity. In this web portfolio you can find some of my projects and those in which I participated.
          </p>
          <a
            style={{ color: "orange", background: "rgba(255, 165, 0,0.3)" }}
            className="rounder hover:bg-orange-900 py-2 px-4 rounded border-orange-600"
            href="https://github.com/SRTENEBROSO00/SRTENEBROSO00.git"
          >
            Hire me ↗
          </a>
        </div>

        {/* Segunda columna (image box) */}
        <figure className="col-start-8 col-span-8 p-4">
          <img src={undraw} alt="Illustration" style={{width: '600px', height: '200px'}} className=""/>
        </figure>
      </main>
    </div>
  );
};

export default Home;
