import React from "react";
import styled from "styled-components";
import Google from "../../resources/images/logs/Google.svg";
import Microsoft from "../../resources/images/logs/Microsoft.svg";
import Airbnb from "../../resources/images/logs/Airbnb.svg";
import Facebook from "../../resources/images/logs/Facebook.svg";
import Spotify from "../../resources/images/logs/Spotify.svg";
import { Button } from "./Info";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoSection = styled.section`
padding: 35px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 700px) {
  }
`;

const LogoLink = styled.a`
  padding: 20px 34px;
  transition: 0.5s;
  :hover {
    transform: scale(1.1);
  }
`;

const LogoSvg = styled.img``;

const Clients = () => {
  return (
    <Container>
      <LogoSection>
        <LogoLink href="https://www.google.com/">
          <LogoSvg src={Google} />
        </LogoLink>
        <LogoLink href="https://www.microsoft.com/">
          <LogoSvg src={Microsoft} />
        </LogoLink>
        <LogoLink href="https://www.airbnb.com/">
          <LogoSvg src={Airbnb} />
        </LogoLink>
        <LogoLink href="https://www.facebook.com/">
          <LogoSvg src={Facebook} />
        </LogoLink>
        <LogoLink href="https://open.spotify.com/">
          <LogoSvg src={Spotify} />
        </LogoLink>
      </LogoSection>
      <Button>Learn More</Button>
    </Container>
  );
};

export default Clients;
