import React from "react";
import InspirationCard from "../InspirationCard/InspirationCard";
import * as Styled from "./NextTripInspiration.styled";

const NextTripInspiration = () => {
  const Inspirations = [
    { city: "Pune", distance: 300 },
    { city: "Lonavla", distance: 159 },
    { city: "Dehradun", distance: 1000 },
    { city: "Munnar", distance: 750 },
  ];
  return (
    <Styled.Container>
      <Styled.Heading>Inspiration for your next trip</Styled.Heading>
      <Styled.InspirationCardsContainer>
        {Inspirations.map((cityDetails, index) => (
          <InspirationCard key={index} cityDetails={cityDetails} />
        ))}
      </Styled.InspirationCardsContainer>
    </Styled.Container>
  );
};

export default NextTripInspiration;
