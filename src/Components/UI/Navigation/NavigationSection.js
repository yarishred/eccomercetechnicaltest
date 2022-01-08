import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";

import "./NavigationSection.css";

export const NavigationSection = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  console.log(hamburgerOpen);

  const HandleHamburgerMenu = () => {
    setHamburgerOpen(hamb => !hamb);
  };
  return (
    <>
      <div className="burger" onClick={HandleHamburgerMenu}>
        <HamburgerMenu />
      </div>
      <header className={hamburgerOpen ? "active" : null}>
        <nav>
          <div className="closemenu" onClick={HandleHamburgerMenu} >
            <i className="fas fa-times" ></i>
          </div>
          <ul>
            <li>
              <NavLink
                to="/section/hombres"
                className={({ isActive }) => (isActive ? "activated" : "")}
              >
                Hombre
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/section/mujer"
                className={({ isActive }) => (isActive ? "activated" : "")}
              >
                Mujer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/section/junior"
                className={({ isActive }) => (isActive ? "activated" : "")}
              >
                Junior
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/section/ninos"
                className={({ isActive }) => (isActive ? "activated" : "")}
              >
                Niños
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/section/accesorios"
                className={({ isActive }) => (isActive ? "activated" : "")}
              >
                Accesorios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/section/ofertas"
                className={({ isActive }) => (isActive ? "activated" : "")}
              >
                Ofertas
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
