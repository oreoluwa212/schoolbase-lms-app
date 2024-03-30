import React from 'react'
import { Link } from 'react-router-dom';
// import Nav from "../../components/landing-page/Nav";
// import Hero from "../../components/landing-page/Hero";
import Choose from "../../../components/landing-page/Choose";
import About from "../../../components/landing-page/About";
import Slider from "../../../components/landing-page/Slider";
import Holder from './Holder';

const LandingPage = () => {
  return (
    <div>
      {/* <div
        style={{
          // backgroundImage: `url( ${BgImg})`,
          backgroundPositionY: "70%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <Nav />
        <Hero />
      </div> */}
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
