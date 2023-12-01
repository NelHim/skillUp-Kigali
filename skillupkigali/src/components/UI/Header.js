import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/SK-logo.png";

function Header() {
  return (
    <div className="flex justify-between">
      <Link to="/">
        <img src={logo} alt="Logo" width={100} className="rounded-3xl" />
      </Link>
      <ul className="flex first-line gap-20 items-center">
        <li className="font-bold text-base">
          <Link to="/">Home</Link>
        </li>
        <li className="font-bold text-base">
          <Link to="/about">About</Link>
        </li>
        <li className="font-bold text-base">
          <Link to="/stories">Stories</Link>
        </li>
        <li className="font-bold text-base">
          <Link to="/shareyourstory">Share your story</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
