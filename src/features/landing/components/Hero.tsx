import React from 'react'
import hero from "../assets/images/hero.jpg"
import { languages } from '../../../data/languages';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {

  const { i18n, t } = useTranslation()

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <section>
      <div
        id="home"
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="absolute top-24 right-5 z-20">
          {/* select lang here */}
          <select onChange={onChangeLang} className='bg-transparent text-white' defaultValue={i18n.language}>
            {languages.map(({ code, label }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">
              {/* Your trusted source for medical inshights and expertise! */}
              {t("heading")}
            </h1>
            <p className="mb-5">
              {/* Welcome to chest hospital where exceptional medical care meets
              compassionate expertise. */}
              {t("desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero