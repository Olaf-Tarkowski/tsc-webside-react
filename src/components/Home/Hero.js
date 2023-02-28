import React from "react";
import styled from "styled-components";
import First from "../../resources/images/graphics/First.svg";

const Container = styled.div`
  max-width: 1220px;
  margin: auto;
`;

const SecondSection = styled.div`
  padding: 40px 20px 40px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 1150px) {
    padding: 0 20px 83px;
    justify-content: space-between;
  }
`;

const TextSection = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.div`
  padding-bottom: 15px;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

const Headline = styled.div`
  width: 100%;
  height: auto;
  font-family: "Crimson Text";
  font-weight: 700;
  font-size: 24px;

  @media (min-width: 700px) {
    font-size: 40px;
  }
  @media (min-width: 1150px) {
    max-width: 470px;
    height: 100px;
    font-size: 40px;
  }
`;

const Text = styled.div`
  width: 100%;
  height: auto;
  margin: 15px 0 25px;
  font-size: 15px;
  line-height: 125%;
  color: rgba(255, 255, 255, 0.75);

  @media (min-width: 1150px) {
    max-width: 416px;
    max-height: 75px;
  }
`;

const Graphics = styled.img`
  max-width: 600px;
  width: 100%;
  height: auto;
  margin: 0 0 30px 0;

  @media (min-width: 1150px) {
    margin: 0;
  }
`;

const Button = styled.button`
  width: 170px;
  height: 48px;
  font-size: 20px;
  line-height: 125%;
  text-align: center;
  color: #000000;
  background: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transform: scale(1.1);
  }
  :active {
    color: #ffffff;
    background: #000000;
  }
`;

const Hero = () => {
  return (
    <Container>
      <SecondSection>
        <Graphics src={First} />
        <TextSection>
          <Title>welcome</Title>
          <Headline>Lorem ipsum dolor sit amet consectetur</Headline>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </Text>
          <Button>Explore</Button>
        </TextSection>
      </SecondSection>
    </Container>
  );
};

export default Hero;
