import React from "react";
import { Sidebar } from "../features/dashboard";
import { pharmacistNavLinks } from "../data/navigationData";
import { Link } from "react-router-dom";

const Pharmacist: React.FC = () => {
  return (
    <Sidebar
      dir="ltr"
      place="mr-auto"
      sidebarContent={pharmacistNavLinks.map((link) => (
        <li key={link.id}>
          <Link to={link.href} className="text-lg font-bold text-primary">
            {link.text}
          </Link>
        </li>
      ))}
    />
  );
};

export default Pharmacist;
