import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h3 className="brand">Breadcrumb Demostartion</h3>
      <ul className="nav-links">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/services"}>Services</Link>
        </li>
        <li>
          <Link to={"/category/crafting"}>Crafting</Link>
        </li>
        <li>
          <Link to={"/brand/apple/iphone-x"}>IPhone X</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
