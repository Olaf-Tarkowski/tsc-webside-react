import React from "react";
import styled from "styled-components";
import Ceo from "../../resources/images/employees/CEO.svg";
import Cto from "../../resources/images/employees/CTO.svg";
import Designer from "../../resources/images/employees/DESIGNER.svg";
import Developer from "../../resources/images/employees/DEVELOPER.svg";
import Card from "./Card";
import { Button } from "./Info";

const cardsData = [
  {
    image: Ceo,
    person: "Peg Legge",
    job: "ceo",
  },
  {
    image: Cto,
    person: "Richard Guerra",
    job: "cto",
  },
  {
    image: Designer,
    person: "Alexandra Stolz",
    job: "designer",
  },
  {
    image: Developer,
    person: "Janet Bray",
    job: "developer",
  },
];

const Container = styled.div`
  padding-bottom: 39px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 700px) {
    padding-bottom: 54px;
  }
`;

const CardSection = styled.div`
  padding: 41px 47px 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  flex-wrap: wrap;

  @media (min-width: 700px) {
    padding: 45px 47px;
    gap: 47px;
  }
`;

const Cards = () => {
  return (
    <Container>
      <CardSection>
        {cardsData.map((data) => (
          <Card
            key={data.job}
            image={data.image}
            person={data.person}
            job={data.job}
          />
        ))}
      </CardSection>
      <Button>View Team</Button>
    </Container>
  );
};

export default Cards;
