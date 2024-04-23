import React from 'react'
import { Sidebar } from '../features/dashboard'
import { receptionNavLinks } from '../data/navigationData';
import { Link } from 'react-router-dom';

const Reception: React.FC = () => {
  return (
    <Sidebar
      dir="rtl"
      sidebarContent={receptionNavLinks.map((link) => (
        <li key={link.id}>
          <Link to={link.href} className="text-lg font-bold text-primary">
            {link.text}
          </Link>
        </li>
      ))}
    />
  );
}

export default Reception