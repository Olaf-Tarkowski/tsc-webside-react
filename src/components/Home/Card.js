import React from "react";
import styled from "styled-components";
import Ceo from "../../resources/images/employees/CEO.svg";

const Container = styled.div`
  padding:10px;
  width: 279px;
  height: 299px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 3px 4px 12px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const Image = styled.img`
  margin-top: 10px;
  width: 175px;
  height: 175px;
`;

const TextSection = styled.div`
  margin: 19px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 17px;

  width: 202px;
  height: 66px;
`;

const Person = styled.div`
  font-family: "Crimson Text";
  font-weight: 700;
  font-size: 24px;
  line-height: 125%;
  color: #212529;
`;

const Job = styled.div`
  text-transform: uppercase;
  font-size: 15px;
  line-height: 125%;
  color: rgba(33, 37, 41, 0.75);
`;

const Card = ({ image, person, job }) => {

  return (
    <Container>
      <Image src={image} />
      <TextSection>
        <Person>{person}</Person>
        <Job>{job}</Job>
      </TextSection>
    </Container>
  );
};

export default Card;
