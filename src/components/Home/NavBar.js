import React, { useState } from "react";
import styled from "styled-components";
import HamburgerMenu from "react-hamburger-menu";
import Logo from "../../resources/images/logs/MainLogo.svg";

const Container = styled.main`
  padding: 17px 20px;
  margin: auto;
  max-width: 1215px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

  @media (max-width: 700px) {
    position: absolute;
    padding: 87px 55px;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    background-color: #ffffff;
    color: #000000;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
  }
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
  font-size: 16px;
  line-height: 24px;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
  @media (min-width: 700px) {
    font-size: 20px;
    line-height: 125%;
  }
`;

const HamburgerMenuContainer = styled.div`
  @media (min-width: 700px) {
    display: none;
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
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Section>
        <Image src={Logo} />
        <Text>Start</Text>
      </Section>
      <NavSection isOpen={isOpen}>
        {navData.map((data, index) => (
          <LogoLink key={index}>{data.link}</LogoLink>
        ))}
      </NavSection>
      <HamburgerMenuContainer>
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={handleClick}
          width={24}
          height={20}
          strokeWidth={2}
          rotate={0}
          color={isOpen ? "#000000" : "#FFFFFF"}
          borderRadius={0}
          animationDuration={0.5}
        />
      </HamburgerMenuContainer>
    </Container>
  );
};

export default NavBar;
