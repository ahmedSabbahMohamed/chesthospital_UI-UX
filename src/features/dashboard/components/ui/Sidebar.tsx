import React from "react";
import { Outlet } from "react-router-dom";
import { sidebarProps } from "../../../../utils/types";
import { FaBars } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";

const Sidebar: React.FC<sidebarProps> = ({
  dir,
  sidebarContent,
  place = "ml-auto",
  logoutText = "Logout"
}) => {
  const logout = () => {
    localStorage.clear();
    window.location.pathname = "/";
  };

  return (
    <div dir={dir} className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className={`btn btn-sm m-2 drawer-button lg:hidden ${place}`}
        >
          <FaBars color="black" />
        </label>

        <div className="w-full min-h-screen bg-blue-50 flex items-center justify-center">
          {/* Page content here */}
          <Outlet />
        </div>
      </div>
      <div className="drawer-side shadow-lg">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {sidebarContent}
          <li onClick={logout} className="text-error text-lg font-bold flex flex-row items-center gap-2 hover:bg-error hover:text-light hover:transition-ease cursor-pointer px-5 py-2 rounded-lg">
            <span className="p-0 hover:bg-transparent">{logoutText}</span>
            <span className="p-0 hover:bg-transparent">
              <AiOutlineLogout />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
