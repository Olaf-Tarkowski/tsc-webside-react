import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    margin-top: 60px;
  }
`;

const Title = styled.div`
  width: 121px;
  height: 20px;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #74c69d;
`;

const Headline = styled.div`
  width: 205px;
  height: 30px;
  margin: 16px 0;
  font-family: "Crimson Text";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 125%;
  text-align: center;

  @media (min-width: 700px) {
    width: 341px;
    height: 50px;
    font-size: 40px;
  }
`;

const Text = styled.div`
  width: 270px;
  height: 85px;
  font-size: 20px;
  line-height: 125%;
  text-align: center;

  @media (min-width: 700px) {
    width: 411px;
    height: 60px;
  }
`;

const Header = ({ data }) => {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Headline>{data.headline}</Headline>
      <Text>{data.text}</Text>
    </Container>
  );
};

export default Header;
