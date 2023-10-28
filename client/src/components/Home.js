import React, { Fragment } from "react";
import HeroSection from "./HeroSection";
import RoofMap from "./RoofMap";
import HomeInfo from "./HomeInfo";
import UserForm from "./UserForm";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <HomeInfo/>
      <RoofMap />
      <UserForm/>
    </Fragment>
  );
};

export default Home;
