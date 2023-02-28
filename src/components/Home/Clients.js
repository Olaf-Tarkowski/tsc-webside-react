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

const linkData = [
  {
    href: "https://www.google.com/",
    image: Google,
  },
  {
    href: "https://www.microsoft.com/",
    image: Microsoft,
  },
  {
    href: "https://www.airbnb.com/",
    image: Airbnb,
  },
  {
    href: "https://www.facebook.com/",
    image: Facebook,
  },
  {
    href: "https://open.spotify.com/",
    image: Spotify,
  },
];

const Clients = () => {
  return (
    <Container>
      <LogoSection>
        {linkData.map((data, index) => (
          <LogoLink key={index} href={data.href}>
            <LogoSvg src={data.image} />
          </LogoLink>
        ))}
      </LogoSection>
      <Button>Learn More</Button>
    </Container>
  );
};

export default Clients;
