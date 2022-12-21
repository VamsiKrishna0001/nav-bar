import React, { useState } from "react";
import { serviceDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown1({ dropdown1 }) {
  const [dropdown, setDropdown] = useState(false);
  console.log(" drop down", dropdown);
  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {dropdown1.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown1;
