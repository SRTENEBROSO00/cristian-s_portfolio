import React from "react";
import { useNavigate, Link } from "react-router-dom";

import Cris from "../assets/img/Cris.png";
import Start from "../assets/icon/home-bold.png";
import Skills from "../assets/icon/backpack.png";
import Projects from "../assets/icon/code.png";
import Github from "../assets/icon/github.png";
import Moon from "../assets/icon/darkmode.png";

const SideNav = () => {
  const navigate = useNavigate();
  return (
    <div className="w-28 h-dvh flex items-center justify-center">
      <div className="bg-slate-800 w-24 rounded-xl h-full flex items-center flex-col justify-around">
        <section>
          <img src={Cris} alt="" />
        </section>

        <nav className="flex flex-col h-80 justify-between">
          <Link to={"/"}>
            <img src={Start} alt="Home" />
          </Link>
          <Link to={'/skills'}>
            <img src={Skills} alt="Skills" />
          </Link>
          <Link>
            <img src={Projects} alt="Projects" />
          </Link>
          <Link>
            <img src={Github} alt="GitHub" />
          </Link>
        </nav>

        <section>
          <img src={Moon} alt="" />
        </section>
      </div>
    </div>
  );
};

export default SideNav;
