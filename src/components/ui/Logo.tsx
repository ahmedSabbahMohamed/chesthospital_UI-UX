import React from 'react'
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <div className="navbar-start">
      <Link to={"/"} className="text-xl text-primary font-bold">
        Logo
      </Link>
    </div>
  );
}

export default Logo