"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Slidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button className="menuButton" onClick={toggleSlidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`${"sidenav"} ${isOpen ? "open " : ""}`}>
        <h2 style={{ color: "#fff" }}>
          Air<span style={{ color: "#0ac61f" }}>MMax</span>
        </h2>

        <Link href="/">
          <p>Menu 1</p>
        </Link>
        <Link href="/">
          <p>Menu 2</p>
        </Link>

        <button href="#" className={"logout"}>
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Slidebar;
