import React from 'react'
import Title from './Title';
import { services } from '../../../services/data';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  return (
    <section>
      <div id="services" className="min-h-screen bg-slate-100 pt-8">
        <div className="container mx-auto">
          <Title firstHalf="Our" secondHalf="Services" />

          <div className="flex justify-center flex-row flex-wrap gap-6 py-10">
            {services.map((serv) => (
                <ServiceCard
                    key={serv.id}
                    img={serv.icon}
                    title={serv.title}
                    desc={serv.desc}
                />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services