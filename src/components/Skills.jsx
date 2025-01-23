import React from "react";
import SkillCard from "./SkillCard";
import JsImg from '../assets/icon/tech/js.png'

const Skills = () => {
  return (
    <div className=" border w-full h-full flex justify-start items-center flex-col animate-fadeIn">
      <h1>Skills</h1>
      
      <SkillCard tech="JavaScript" description="Hola como estas, espero que estes bien Hola como estas, espero que estes bien Hola como estas, espero que estes bien" image={JsImg}/>
    </div>
  );
};

export default Skills;
