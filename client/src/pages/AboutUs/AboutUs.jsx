import React from 'react';
import leftimg from '../../assets/leftimg.png';
import rightimg from '../../assets/rightimg.png';
import Minilogo from '../../components/Minilogo/Minilogo';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="aboutus-header">
        <h2>About Comet.S</h2>
      </div>
      <Minilogo/>
      <div className="aboutus-container">
        <div className="aboutus-text aboutus-left">
          <p>CometS is far from an unusual place, it does not look like a simple pub with a standard menu and fixed prices.</p>
        </div>
        <div className="aboutus-imagelr">
          <img src={leftimg} alt="" />
        </div>
      </div>
      <div className="aboutus-container">
        <div className="aboutus-imagelr">
          <img src={rightimg} alt="" />
        </div>
        <div className="aboutus-text aboutus-right">
          <p> We have developed a special pricing system that will change in real time, which will surely surprise visitors and allow them to choose a drink to their liking.</p>
        </div>
      </div>
      <Minilogo/>
      <div className="aboutus-content">
        <p>We specialize in turning your boring evening into something more than just a trip to the bar. Large screens throughout the establishment broadcasting the demand for various drinks will create a special atmosphere of the bar.</p>
      </div>
      <div className="aboutus-mission">
        <p>Our mission: To make your evening special and make you think about what you will drink.</p>
      </div>
    </div>
  );
};

export default AboutUs;
