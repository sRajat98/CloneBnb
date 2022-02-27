import React from "react";
import Inspiration from "../../../app/images/inspirationsCard/inspiration.webp";
import ImageView from "../../../app/themes/GlobalElements/ImageView/ImageView";
import * as Styled from "./InspirationCard.styled";

const InspirationCard = ({ cityDetails }) => {
  return (
    <Styled.Container>
      <Styled.TopContainer>
        <ImageView src={Inspiration} imageStyles={Styled.imageStyles} />
      </Styled.TopContainer>
      <Styled.BottomContainer>
        <Styled.Heading>{cityDetails.city}</Styled.Heading>
        <Styled.Distance>
          {cityDetails.distance} kilometers away
        </Styled.Distance>
      </Styled.BottomContainer>
    </Styled.Container>
  );
};

export default InspirationCard;
