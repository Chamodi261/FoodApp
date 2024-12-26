import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import SideBar from "./SideBar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/", icon: faHome },
    { name: "Recipies", path: "/recipies", icon: faList },
    { name: "Settings", path: "/settings", icon: faCog },
  ];

  function closeSideBar() {
    setShowSideBar(false);
  }

  return (
    <>
      <div className="navbar container">
        <Link to="/" className="logo">
          F<span>oo</span>diesHub
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              className={location.pathname === link.path ? "active" : ""}
              to={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setShowSideBar(true)}
          className={showSideBar ? "slidebar-btn active" : "slidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSideBar && <SideBar close={closeSideBar} links={links} />}
    </>
  );
};

export default Navbar;
