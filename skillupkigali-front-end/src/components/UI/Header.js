import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/SK-logo.png";
import { useClickAway } from "@uidotdev/usehooks";

function Header() {
  const location = useLocation();
  const [navToggled, setNavToggled] = useState(false);

  const ref = useClickAway(() => {
    setNavToggled(false);
  });

  return (
    <div className="flex relative items-center justify-between">
      <Link to="/">
        <img src={logo} alt="Logo" width={100} className="rounded-3xl" />
      </Link>
      <ul className="md:flex hidden first-line gap-20 items-center">
        <li
          className={
            location.pathname === "/"
              ? `flex first-line gap-20 text-[#0ccbf1d9] font-bold items-center`
              : `flex first-line gap-20 items-center`
          }
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={
            location.pathname === "/about"
              ? `flex first-line gap-20 text-[#0ccbf1d9] font-bold items-center`
              : `flex first-line gap-20 items-center`
          }
        >
          <Link to="/about">About</Link>
        </li>
        <li
          className={
            location.pathname === "/stories"
              ? `flex first-line gap-20 text-[#0ccbf1d9] font-bold items-center`
              : `flex first-line gap-20 items-center`
          }
        >
          <Link to="/stories">Stories</Link>
        </li>
        <li
          className={
            location.pathname === "/shareyourstory"
              ? `flex first-line gap-20 text-[#0ccbf1d9] font-bold items-center`
              : `flex first-line gap-20 items-center`
          }
        >
          <Link to="/shareyourstory">Share your story</Link>
        </li>
      </ul>
      <div className="md:hidden block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="16"
          viewBox="0 0 512 512"
          className="h-9 w-9"
          onClick={() => setNavToggled(!navToggled)}
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
        {navToggled && (
          <div
            ref={ref}
            className="grid absolute z-10 bg-blue-50 rounded-lg right-0 mt-5 py-5 px-10 gap-5 text-xl"
          >
            <Link to="/" className="text-center">
              Home
            </Link>
            <Link to="/about" className="text-center">
              About
            </Link>
            <Link to="/stories" className="text-center">
              Stories
            </Link>
            <Link to="/shareyourstory" className="text-center">
              Share your story
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
