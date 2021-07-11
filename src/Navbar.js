import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
const Navbar = () => {
  const { choice, setChoice } = useGlobalContext();
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className="navbar">
      <img
        src="https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png"
        alt="Cocktail Db logo"
        className="logo"
      />
      <div className="nav-center">
        <ul className="nav-links">
          <li>
            <button className="btn" onClick={() => setChoice(true)}>
              Text Generator
            </button>
          </li>
          <li>
            <button className="btn" onClick={() => setChoice(false)}>
              Colour Generator
            </button>
          </li>
          <li>
            <button className="btn" onClick={toggleTheme}>
              Switch mode
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
