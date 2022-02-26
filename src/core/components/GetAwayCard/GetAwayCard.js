import React from "react";
import ImageView from "../../../app/themes/GlobalElements/ImageView/ImageView";
import getAwayBackground from "../../../app/images/mobileHeader/getAwayBackground.webp";

import * as Styled from "./GetAwayCard.styled";

const GetAwayCard = ({ cardData }) => {
  return (
    <Styled.Container>
      <Styled.ImageTile>
        <ImageView src={getAwayBackground} imageStyles={Styled.imageStyles} />
      </Styled.ImageTile>
      <Styled.CityDriveContainer>
        <Styled.CityText>{cardData.city}</Styled.CityText>
        <Styled.DriveText>{cardData.driveDuration}-hour drive</Styled.DriveText>
      </Styled.CityDriveContainer>
    </Styled.Container>
  );
};

export default GetAwayCard;
