import React from "react";
import Cards from "../Home/Cards";
import Clients from "../Home/Clients";
import TitleContent from "../Home/TitleContent";
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
      <TitleContent data={Data.partners} />
      <Clients />
      <Info />
      <TitleContent data={Data.team} />
      <Cards />
    </>
  );
};

export default ContentContainer;
