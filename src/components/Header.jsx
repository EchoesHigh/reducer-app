import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import AddForm from "./AddForm";

const Header = ({ state, dispatch, theme, toggleTheme }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar navbar-dark text-left contacts__header">
      <div className="container-fluid px-4 mx-0 w-50 contacts__header-title_container">
        <div className="contacts__header-icon_container">
          {theme === "light" ? (
            <i
              id="icon"
              className="bi bi-moon-fill contacts__header-darkmode"
              onClick={toggleTheme}
            ></i>
          ) : (
            <i
              id="icon"
              className="bi bi-brightness-low-fill contacts__header-lightmode"
              onClick={toggleTheme}
            ></i>
          )}
        </div>
        <h1 className="navbar-brand mb-0 h1 px-3 py-3 contacts__header-title">
          Agenda
        </h1>
      </div>
      <div className="px-4 d-flex">
        {toggleMenu ? (
          <RiCloseLine
            className="contacts__navbar-menu_icons"
            color="#fff"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="contacts__navbar-menu_icons"
            color="#fff"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="contacts__navbar-menu py-2 rounded-3 mx-3">
            <AddForm state={state} dispatch={dispatch} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
