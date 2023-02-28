import React from "react";
import Card from "../Home/Card";
import Cards from "../Home/Cards";
import Clients from "../Home/Clients";
import Header from "../Home/Header";
import Info from "../Home/Info";

const ContentContainer = () => {
  const Data = {
    partners: {
      title: "partners",
      headline: "Lorem Ipsum Dolor",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    team: {
      title: "team",
      headline: "Our Talents",
      text: "Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,",
    },
  };
  return (
    <>
      <Header data={Data.partners} />
      <Clients />
      <Info />
      <Header data={Data.team} />
      <Cards />
    </>
  );
};

export default ContentContainer;
