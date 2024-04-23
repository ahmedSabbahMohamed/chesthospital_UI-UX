import React from 'react'
import notFoundImg from "../../assets/images/404-page.gif"
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div
      className="h-screen bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${notFoundImg})` }}
    >
      <Link to={"/"} className="btn btn-neutral btn-lg absolute left-1/2 -translate-x-1/2 bottom-5">
        Back to the Home
      </Link>

    </div>
  );
}

export default NotFoundPage