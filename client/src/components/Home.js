import React, { Fragment } from "react";
import HeroSection from "./HeroSection";
import RoofMap from "./RoofMap";
import HomeInfo from "./HomeInfo";
import UserForm from "./UserForm";
import { Helmet } from "react-helmet";
import "../styles/HeroSection.scss";

const Home = () => {
  return (
    <Fragment >

      <Helmet>
        <title>
          Transform Your Roofing Experience with Quantum Roofing Services
        </title>
        <meta
          name="description"
          content="Discover cost-effective and innovative roofing solutions at Quantum Roofing. Our prompt and reliable services redefine the industry. Calculate your roofing estimate online or get in touch with us for a detailed solution. Your roof, your rules."
        />
      </Helmet>
      <div  className="home-wrap">
      <HeroSection />
      <HomeInfo />
      <RoofMap />
      <UserForm />
      </div>

    </Fragment>
  );
};

export default Home;
