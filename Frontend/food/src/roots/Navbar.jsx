import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../css/NavDesign.css";
import MenuIcon from "@mui/icons-material/Menu";

//import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidt] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidt(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="navbar">
      {(toggleMenu || screenWidth > 500) && (
        <ul className="navbar">
          <li>
            <NavLink className="root" to="/">
              Főoldal
            </NavLink>
          </li>

          <li>
            <NavLink className="root" to="../pages/About.jsx">
              Rólunk
            </NavLink>
          </li>

          <li>
            <NavLink className="root" to="../pages/Contact.jsx">
              Elérhetőség
            </NavLink>
          </li>

          <li>
            <NavLink className="root" to="../pages/Services.jsx">
              Szolgáltatások
            </NavLink>
          </li>
        </ul>
      )}

      <button className="menu-icon" onClick={toggleNav}>
        <MenuIcon />
      </button>
    </nav>
  );
};

export default Navbar;
