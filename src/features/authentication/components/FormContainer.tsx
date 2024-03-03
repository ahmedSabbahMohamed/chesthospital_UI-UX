import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import logImg from "../assets/images/log.svg"
import { FormContainerProps } from '../../../utils/types';

const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return (
    <div className="min-h-[500px] max-w-full sm:max-w-[calc((100%/4)*3)] m-5 flex flex-col sm:grid sm:grid-cols-8 bg-white container sm:mx-auto rounded-xl overflow-hidden shadow-md">
      {/* left */}
      <div className="col-span-3 flex items-center justify-center bg-gradient-to-b from-cyan-500 to-blue-500 min-h-[350px] sm:min-h-full relative overflow-hidden">
        <Link to={"/"} className="absolute top-4 left-4 text-white text-2xl">
          <IoMdArrowRoundBack />
        </Link>
        <div>
          <img className="block mb-3" src={logImg} alt="log-image" />
          <h2 className="text-white uppercase text-xl text-center font-semibold">
            let's you in
          </h2>
        </div>
      </div>

      {/* right */}
      <div className="col-span-5 p-4 md:p-0 flex items-center justify-center">
        <div>
          <h2 className="text-center text-slate-800 font-semibold mb-5 text-2xl">
            Signin
          </h2>
          {children}
        </div>
      </div>
    </div>
  );
}

export default FormContainer