import React from "react";
import SkillCard from "./SkillCard";
import JsImg from "../assets/icon/tech/js.png";
import html from "../assets/icon/tech/html.png";
import css from "../assets/icon/tech/css.png";
import figma from "../assets/icon/tech/figma.png";
import react from "../assets/icon/tech/react.png";
import tailwind from "../assets/icon/tech/tailwind.png";
import pyrhon from "../assets/icon/tech/python.png";


const Skills = () => {
  return (
    <div className="w-full h-full flex justify-start items-center flex-col animate-fadeIn">
      <h1 className="text-4xl font-italiana m-3">Skills</h1>
      <div className="h-5/6 w-5/6 flex flex-wrap p-5 items-center">
        <SkillCard
          tech="JavaScript"
          description="Hola como estas, espero que estes bien Hola como estas, espero que estes bien Hola como estas, espero que estes bien"
          image={JsImg}
        />
        <SkillCard
          tech="HTML5"
          description="Hola como estas, espero que estes bien Hola como estas, espero que estes bien Hola como estas, espero que estes bien"
          image={html}
        />
        <SkillCard
          tech="CSS"
          description="Hola como estas, espero que estes bien Hola como estas, espero que estes bien Hola como estas, espero que estes bien"
          image={css}
        />
        <SkillCard
          tech="Tailwind"
          description="Hola como estas, espero que estes bien Hola como estas, espero que estes bien Hola como estas, espero que estes bien"
          image={tailwind}
        />
        <SkillCard
          tech="React"
          description="Hola como estas, espero que estes bien Hola como estas, espero que estes bien Hola como estas, espero que estes bien"
          image={react}
        /><SkillCard
        tech="Python"
        description="Hola como estas, espero que estes bien Hola como estas, espero que estes bien Hola como estas, espero que estes bien"
        image={pyrhon}
      /><SkillCard
      tech="Figma"
      description="Hola como estas, espero que estes bien Hola como estas, espero que estes bien Hola como estas, espero que estes bien"
      image={figma}
    />
      </div>
    </div>
  );
};

export default Skills;
