import React from "react";
import styled from "styled-components";
import Facebook from "../../resources/images/logs/Group 33.svg";
import Instagram from "../../resources/images/logs/Group 34.svg";
import Twitter from "../../resources/images/logs/Group 35.svg";
import Pinterest from "../../resources/images/logs/Group 36.svg";
import TikTok from "../../resources/images/logs/Group 37.svg";
import WhatsApp from "../../resources/images/logs/Group 38.svg";
import YouTube from "../../resources/images/logs/Group 39.svg";

const Background = styled.div`
  background: #74c69d;
`;

const Container = styled.div`
  max-width: 1227px;
  height: 125px;
  margin: auto;
  padding: 31px 24.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LogoSection = styled.section`
  width: 242px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 700px) {
    padding: 0;
  }
`;

const LogoLink = styled.a`
  transition: 0.5s;
  :hover {
    transform: scale(1.5);
  }
`;

const LogoSvg = styled.img``;

const Text = styled.div`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: right;
  color: #ffffff;

  @media (min-width: 420px) {
    font-size: 20px;
  }
`;

const linkData = [
  {
    href: "https://www.facebook.com/",
    image: Facebook,
  },
  {
    href: "https://www.instagram.com/",
    image: Instagram,
  },
  {
    href: "https://twitter.com/",
    image: Twitter,
  },
  {
    href: "https://www.pinterest.com/",
    image: Pinterest,
  },
  {
    href: "https://www.tiktok.com/",
    image: TikTok,
  },
  {
    href: "https://www.whatsapp.com/",
    image: WhatsApp,
  },
  {
    href: "https://www.youtube.com/",
    image: YouTube,
  },
];

const Footer = () => {
  return (
    <Background>
      <Container>
        <LogoSection>
          {linkData.map((data, index) => (
            <LogoLink key={index} href={data.href}>
              <LogoSvg src={data.image} />
            </LogoLink>
          ))}
        </LogoSection>
        <Text>© Start, 2022. All rights reserved.</Text>
      </Container>
    </Background>
  );
};

export default Footer;
