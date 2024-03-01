import React from 'react'
import Title from './Title';
import about from "../assets/images/about.png"
import LearnMoreBtn from './LearnMoreBtn';

const About: React.FC = () => {
  return (
    <section>
      <div id="about" className="min-w-screen min-h-screen pt-8">
        <Title firstHalf="About" secondHalf="Us" />

        <div className="container mx-auto flex gap-8 flex-col lg:flex-row items-center py-5">
          {/* left */}
          <div className="">
            <img src={about} alt="about-img" />
          </div>

          {/* right */}
          <div className="px-5 text-center lg:text-left">
            <h2 className="text-black text-[46px] font-medium capitalize leading-[70px] mb-8">
              we take care of your healthy life
            </h2>
            <p className="text-black text-opacity-60 text-lg font-normal leading-[27px] mb-[51px]">
              Welcome to Medilife,Where exceptional medical care <br /> meets
              compassionate expertise
              <br />
              <br />
              Welcome to Medilife,Where exceptional medical care meets
              compassionate expertise
              <br />
              Welcome to Medilife,Where exceptional medical care meets
              compassionate expertise
            </p>

            <LearnMoreBtn />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About