import React from 'react';
import { Sidebar } from '../features/dashboard';
import { labAdminNavLinks } from '../data/navigationData';
import { Link } from 'react-router-dom';

const LabAdmin: React.FC = () => {
  return (
    <Sidebar
      dir="ltr"
      place="mr-auto"
      sidebarContent={labAdminNavLinks.map((link) => (
        <li key={link.id}>
          <Link to={link.href} className="text-lg font-bold text-primary">
            {link.text}
          </Link>
        </li>
      ))}
    />
  );
}

export default LabAdmin