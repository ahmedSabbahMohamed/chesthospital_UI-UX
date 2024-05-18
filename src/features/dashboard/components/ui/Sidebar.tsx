import React from "react";
import { Outlet } from "react-router-dom";
import { sidebarProps } from "../../../../utils/types";
import { FaBars } from "react-icons/fa";

const Sidebar: React.FC<sidebarProps> = ({ dir, sidebarContent, place = "ml-auto" }) => {
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
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
