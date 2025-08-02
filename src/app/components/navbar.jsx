"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const togglevisibility = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="navbarContainer">
        <div className="navbarLeft">
          <h1 className="navbarTitle">Yuusuf Roble</h1>
        </div>
        <div className="navbarRight">
          <GiHamburgerMenu className="menuIcon" onClick={togglevisibility} />
          <ul className={`navLinks ${menuOpen ? "show" : "hide"}`}>
            <li onClick={togglevisibility}>
              <a href="#about">About</a>
            </li>
            <li onClick={togglevisibility}>
              <a href="#projects">Projects</a>
            </li>
            <li onClick={togglevisibility}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
