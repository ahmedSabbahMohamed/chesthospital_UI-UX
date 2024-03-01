import React from "react";
import { navLinks } from "../../../data/navigationData";

const NavLinks: React.FC = () => {
  return navLinks.map((link) => (
    <li key={link.href}>
      <a className="text-lg" href={link.href}>
        {link.text}
      </a>
    </li>
  ));
};

export default NavLinks;
