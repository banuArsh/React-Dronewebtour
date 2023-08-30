import React from "react";
import Carousel from "../components/Carousel/Carousel.js";
import { Content } from "../components/content/content";
import Hero from "../components/hero/hero";
import Features from "../components/feature/feature";
import { heroOne, heroTwo, heroThree } from "../data/HeroData";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Carousel />
    </>
  );
};

export default Home;
