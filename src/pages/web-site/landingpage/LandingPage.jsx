import React from 'react'
import { Link } from 'react-router-dom';
import Choose from "../../../components/landing-page/Choose";
import About from "../../../components/landing-page/About";
import Slider from "../../../components/landing-page/Slider";
import Holder from './Holder';

const LandingPage = () => {
  return (
    <div>
      <Holder/>
      <div
        className="px-4"
        style={{
          background:
            "linear-gradient(0deg, rgba(231,242,255,1) 0%, rgba(255,255,255,1) 100%)",
        }}
      >
        <Choose />
        <About />
        <Slider />
      </div>
    </div>
  );
};

export default LandingPage;
