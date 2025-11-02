import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-name">
            Shreyas Raviprakash.
          </h1>
          <h2 className="hero-title">I build things for the web.</h2>
          <p className="hero-description">
            I'm a software engineer specializing in building (and occasionally designing)
            exceptional digital experiences. Currently, I'm focused on building accessible,
            human-centered products at <span className="highlight-company">upcoming</span>.
          </p>
          <div className="hero-cta">
            <a 
              href="#projects"
              className="btn btn-primary"
            >
              Check out my work!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;