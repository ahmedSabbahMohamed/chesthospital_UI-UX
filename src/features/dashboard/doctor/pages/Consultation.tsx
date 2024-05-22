import React from 'react'
import ConsultationRequest from '../../components/form/ConsultationRequest';

const Consultation: React.FC = () => {
  return (
    <div className="container flex flex-col justify-center items-center">
      <h2 className='text-dark text-3xl font-bold mb-10'>Consultation Request</h2>
      <ConsultationRequest />
    </div>
  );
};

export default Consultation;