import React from "react";
import styled from "styled-components";
import Second from "../../resources/images/graphics/Second.svg";
import Third from "../../resources/images/graphics/Third.svg";

const Container = styled.div`
  max-width: 1220px;
  margin: auto;
`;

const Section = styled.div`
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 1150px) {
    padding: 73px 20px;
    justify-content: space-between;
  }
`;

const SecondSection = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 1150px) {
    padding: 0 20px 102px ;
    justify-content: space-between;
  }
`;

const TextSection = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  margin: 16px 0;
  font-size: 15px;
  line-height: 125%;
  color: rgba(33, 37, 41, 0.5);

  @media (min-width: 1150px) {
    max-width: 470px;
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

export const Button = styled.button`
  width: 170px;
  height: 48px;
  font-size: 20px;
  line-height: 125%;
  text-align: center;
  color: #ffffff;
  background: #212529;
  border-radius: 5px;
`;

const Info = () => {
  return (
    <Container>
      <Section>
        <Graphics src={Second} />
        <TextSection>
          <Headline>Lorem ipsum dolor sit amet consectetur</Headline>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </Text>
          <Button>Learn More</Button>
        </TextSection>
      </Section>
      <SecondSection>
        <Graphics src={Third} />
        <TextSection>
          <Headline>Lorem ipsum dolor sit amet consectetur</Headline>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </Text>
          <Button>Learn More</Button>
        </TextSection>
      </SecondSection>
    </Container>
  );
};

export default Info;
