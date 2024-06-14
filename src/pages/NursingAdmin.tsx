import React from 'react'
import { Sidebar } from '../features/dashboard'
import { nursingAdminNavLinks } from '../data/navigationData';
import { Link } from 'react-router-dom';

const NursingAdmin: React.FC = () => {
  return (
    <Sidebar
      dir="ltr"
      place="mr-auto"
      sidebarContent={nursingAdminNavLinks.map((link) => (
        <li key={link.id}>
          <Link to={link.href} className="text-lg font-bold text-primary">
            {link.text}
          </Link>
        </li>
      ))}
    />
  );
}

export default NursingAdmin