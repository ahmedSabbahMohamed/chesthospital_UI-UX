import React from "react";
import Logo from "../../../components/ui/Logo";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";

const Header: React.FC = () => {
  return (
    <header className="shadow-lg fixed z-40 w-full bg-white">
      <div className="navbar bg-base-100 container mx-auto">
        <Logo />

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end">
          <Link to={"/login"} className="btn bg-primary text-white text-lg">
            signin
          </Link>
        </div>

        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn m-1 text-lg">
            <FaBars color="black" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-5"
          >
            <NavLinks />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
