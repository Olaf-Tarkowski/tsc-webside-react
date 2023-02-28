import React from "react";
import styled from "styled-components";
import Logo from "../../resources/images/logs/MainLogo.svg";

const Container = styled.main`
  padding: 17px 20px;
  margin: auto;
  max-width: 1215px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1150px) {
    padding: 35px 20px;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
`;

const NavSection = styled.section`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Image = styled.img`
  margin-right: 10px;
  width: 45px;

  @media (min-width: 1150px) {
    margin-right: 18px;
    width: 70px;
  }
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 30px;
  line-height: 125%;

  @media (min-width: 1150px) {
    font-size: 40px;
  }
`;

const LogoLink = styled.a`
  font-size: 20px;
  line-height: 125%;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;

const navData = [
  {
    link: "Home",
  },
  {
    link: "Portfolio",
  },
  {
    link: "Services",
  },
  {
    link: "Contact",
  },
];

const NavBar = () => {
  return (
    <Container>
      <Section>
        <Image src={Logo} />
        <Text>Start</Text>
      </Section>
      <NavSection>
        {navData.map((data, index) => (
          <LogoLink key={index}>{data.link}</LogoLink>
        ))}
      </NavSection>
    </Container>
  );
};

export default NavBar;
