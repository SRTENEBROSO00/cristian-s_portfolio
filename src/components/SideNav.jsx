import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'; 

import Cris from "../assets/img/Cris.png";
import Start from "../assets/icon/home-bold.png";
import Skills from "../assets/icon/backpack.png";
import Projects from "../assets/icon/code.png";
import Github from "../assets/icon/github.png";
import Moon from "../assets/icon/darkmode.png";

const SideNav = () => {

  return (
    <div className=" animate-fadeIn w-28 h-dvh flex items-center justify-center">
      <div className="bg-customBlack w-24 rounded-xl h-full flex items-center flex-col justify-around">
      <section>
          <img src={Cris} alt="" />
        </section>

        <nav className="flex flex-col h-80 justify-between">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-gray-500' // Cambiar color cuando está activo
            }
          >
            <img src={Start} alt="Home" />
          </NavLink>
          
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-gray-500' // Cambiar color cuando está activo
            }
          >
            <img src={Skills} alt="Skills" />
          </NavLink>
          
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-gray-500' // Cambiar color cuando está activo
            }
          >
            <img src={Projects} alt="Projects" />
          </NavLink>
          
          <NavLink
            to="/github"
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-gray-500' // Cambiar color cuando está activo
            }
          >
            <img src={Github} alt="GitHub" />
          </NavLink>
        </nav>

        <section>
          <img src={Moon} alt="" />
        </section>
      </div>
    </div>
  );
};

export default SideNav;
