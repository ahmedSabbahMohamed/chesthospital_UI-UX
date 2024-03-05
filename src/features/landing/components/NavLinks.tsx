import React from "react";
import { navLinks } from "../../../data/navigationData";
import { useTranslation } from "react-i18next";

const NavLinks: React.FC = () => {
  const { t } = useTranslation()

  return navLinks.map((link) => (
    <li key={link.href}>
      <a className="text-lg" href={link.href}>
        {t(link.text)}
      </a>
    </li>
  ));
};

export default NavLinks;
