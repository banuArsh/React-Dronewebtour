import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalstyle";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./herostyle";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="./assets/hero2.mp4" autoPlay loop muted />
      <Container>
        <MainHeading> Discover The World With Drones</MainHeading>
        <HeroText>
          Capture your moments from above with Professional aerial Drones
        </HeroText>
        <ButtonWrapper>
          <Link to="signup">
            <Button>Get Started</Button>
          </Link>
          <HeroButton>Find More</HeroButton>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
