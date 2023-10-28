import React, { Fragment } from "react";
import HeroSection from "./HeroSection";
import RoofMap from "./RoofMap";
import HomeInfo from "./HomeInfo";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <HomeInfo/>
      <RoofMap />
    </Fragment>
  );
};

export default Home;
