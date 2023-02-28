import React from "react";
import styled from "styled-components";
import Hero from "../Home/Hero";
import NavBar from "../Home/NavBar";

const Background = styled.main`
  background: #74c69d;
  color: #ffffff;
`;

const Header = () => {
  return (
    <Background>
      <NavBar />
      <Hero />
    </Background>
  );
};

export default Header;
