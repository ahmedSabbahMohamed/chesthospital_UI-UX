import React from 'react'
import Title from './Title';
import { services } from '../../../data/servicesData';
import ServiceCard from './ServiceCard';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section>
      <div id="services" className="min-h-screen bg-slate-100 pt-8">
        <div className="container mx-auto">
          <Title firstHalf={t("our")} secondHalf={t("services")} />

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