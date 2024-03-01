import React from 'react'
import hero from "../assets/images/hero.jpg"

const Hero: React.FC = () => {
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
        </div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">
              Your trusted source for medical inshights and expertise!
            </h1>
            <p className="mb-5">
              Welcome to chest hospital where exceptional medical care meets
              compassionate expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero