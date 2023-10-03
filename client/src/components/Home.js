import React, { Fragment } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import RoofingCalculator from "./RoofingCalculator";
import RoofMeasurementInstructions from "./RoofMeasurementInstructions";
import UserForm from "./UserForm";
import Footer from "./Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <RoofingCalculator />
      <RoofMeasurementInstructions />
      <UserForm />
      <Footer />
    </Fragment>
  );
};

export default Home;
