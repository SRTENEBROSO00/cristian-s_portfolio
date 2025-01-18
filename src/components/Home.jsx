import React from "react";
import undraw from "../assets/img/undrawLaptop.png";

const Home = () => {
  return (
    <div className=" w-full flex justify-start items-center flex-col">
      <div className=" h-52 flex justify-center items-center">
        <p className="italic font-serif font-extralight text-3xl m-10 w-96 text-center">
          My Portfolio
        </p>
      </div>

      <main className="grid grid-cols-4 gap-4 h-4/6 place-items-center">
        {/* Primera columna (text box) */}
        <div className="col-span-2 w-5/6 h-3/6 p-4 flex flex-col items-start justify-around">
          <p className="">Hi, there!👋</p>
          <h2 className="font-extralight font-serif text-5xl  ">Welcome, I'm Cristian Castro</h2>
          <p className="w-3/4 ">
            <span className="text-orange-400 ">Software development</span> y apacionado por aprender cosas
            nuevas. Mi área favorita es el frontend en el cual puedo destacar
            por mis habilidades de manipular cosas.
          </p>
          <button style={{color: 'orange', background: 'rgba(255, 165, 0,0.3)'}} className="rounder hover:bg-orange-900 py-2 px-4 rounded border-orange-600" >Hire me</button>
        </div>

        {/* Segunda columna (image box) */}
        <figure className="col-span-2 p-4">
          <img src={undraw} alt="Illustration" />
        </figure>
      </main>
    </div>
  );
};

export default Home;
