import React, { Fragment } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
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
