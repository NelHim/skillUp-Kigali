import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/SK-logo.png";

function Header() {
  return (
    <div className="flex justify-between">
      <Link to="/">
        <img src={logo} alt="Logo" width={100} />
      </Link>
      <ul className="flex first-line gap-20 mr-20 items-center">
        <li className="font-bold text-xl">
          <Link to="/about">About</Link>
        </li>
        <li className="font-bold text-xl">
          <Link to="/getInspired">Get Inspired</Link>
        </li>
        <li className="font-bold text-xl">
          <Link to="/shareYourStory">Share your story</Link>
        </li>
        <li className="font-bold text-xl">
          <Link to="/media">Media</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
