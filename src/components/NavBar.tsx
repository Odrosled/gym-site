import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const menu = "public/assets/list.svg";
  const close = "public/assets/x.svg";

  return (
    <div className="flex items-center justify-between p-4 px-8 bg-black text-white sticky top-0 z-50 max-md:flex-col">
      <Link to="/">
        <div className="flex items-center gap-2">
          <img className="mt-2" src="/assets/barbell.svg" alt="bb" />
          <div>
            <h1 className="font-bold text-3xl">GymRat</h1>
            <p className="text-[10px] tracking-[.26em] font-thin uppercase leading-3">
              never satisfied
            </p>
          </div>
        </div>
      </Link>
      <div
        onClick={() => setOpen(!open)}
        className="absolute right-8 top-6 cursor-pointer md:hidden"
      >
        <img src={open ? menu : close} alt="menu" />
      </div>
      <ul
        className={`flex items-center gap-5 tracking-wide max-md:flex-col transition-all duration-500 ease-in ${
          open ? "hidden" : ""
        }`}
      >
        <Link to={"/"}>
          <li className="hover:text-[#f97316] transition duration-200">Home</li>
        </Link>
        <Link to={"/about"}>
          <li className="hover:text-[#f97316] transition duration-200">
            About
          </li>
        </Link>
        <Link to={"/schedule/monday"}>
          <li className="hover:text-[#f97316] transition duration-200">
            Schedule
          </li>
        </Link>
        <Link to={"/pricing"}>
          <li className="hover:text-[#f97316] transition duration-200">
            Pricing
          </li>
        </Link>
        <Link to={"/classes"}>
          <li className="hover:text-[#f97316] transition duration-200">
            Classes
          </li>
        </Link>
        <Link to={"/contact"}>
          <li className="hover:text-[#f97316] transition duration-200">
            Contact
          </li>
        </Link>
      </ul>
      <div
        className={`flex items-center gap-4 max-md:flex-col ${
          open ? "hidden" : ""
        }`}
      >
        <Link to={"/contact"}>
          <img
            className="hover:animate-bounce max-md:mt-3"
            src="/assets/user.svg"
            alt="user"
          />
        </Link>
        <Link to={"/classes"}>
          <button className="flex items-center p-2 border-2 rounded-md gap-3">
            <img
              className="p-2 border-2 rounded-md bg-orange-500 hover:animate-spin"
              src="/assets/plus.svg"
              alt="plus"
            />
            <p className="font-extrabold text-sm">JOIN CLASS NOW</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
