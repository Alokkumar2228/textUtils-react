import React from 'react';
import './About.css'; // Assuming you'll add custom styling in this CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Welcome to <span className="highlight">TextUtils</span></h1>
      <p className="about-description">
        At <strong>TextUtils</strong>, we transform the way you interact with text. Whether you're a writer, a developer, or just love experimenting with words, 
        TextUtils is designed to make your text manipulation tasks easier, faster, and more enjoyable.
      </p>
      <div className="about-features">
        <div className="feature">
          <h2>🛠 Powerful Tools</h2>
          <p>Leverage a suite of tools that handle everything from text formatting to encoding and decoding, all in one place.</p>
        </div>
        <div className="feature">
          <h2>⚡ Effortless Experience</h2>
          <p>Our intuitive interface ensures that even the most complex text manipulations are just a few clicks away.</p>
        </div>
        <div className="feature">
          <h2>🚀 Work Smarter</h2>
          <p>Designed with simplicity in mind, TextUtils lets you focus on creativity while we handle the heavy lifting.</p>
        </div>
      </div>
      <p className="about-call-to-action">
        Join a community of text enthusiasts and see how <strong>TextUtils</strong> can elevate your wordplay. Your creativity, empowered by technology.
      </p>
    </div>
  );
};

export default About;
