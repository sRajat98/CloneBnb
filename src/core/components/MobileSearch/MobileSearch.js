import React from "react";
import Back from "../../../app/images/icons/Back";
import SvgContainer from "../../../app/themes/GlobalElements/SvgContainer.styled";
import GetAwayCard from "../GetAwayCard/GetAwayCard";
import * as Styled from "./MobileSearch.styled";

const MobileSearch = (props) => {
  const getAwayData = [
    { city: "Pune", driveDuration: "3" },
    { city: "Mumbai", driveDuration: "7" },
    { city: "Delhi", driveDuration: "10" },
    { city: "Bangalore", driveDuration: "4" },
    { city: "Chennai", driveDuration: "8" },
  ];
  return (
    <Styled.Container layoutId="expandable-search">
      <Styled.SearchWrapper>
        <Styled.TopContainer>
          <SvgContainer
            height="1.6rem"
            styles={Styled.backIconStyles}
            onClick={() => props.setIsMobileSearchVisible(false)}
          >
            <Back />
          </SvgContainer>
          <Styled.Input
            autoFocus
            type="text"
            placeholder="Where are you going?"
          />
        </Styled.TopContainer>
        <Styled.FlexibleContainer>
          <Styled.Heading>Go Anywhere, Go Anytime</Styled.Heading>
          <Styled.IAmFlexibleButton>
            <div>I'm Flexible</div>
            <SvgContainer height="2.4rem" styles={Styled.forwardIconStyles}>
              <Back />
            </SvgContainer>
          </Styled.IAmFlexibleButton>
        </Styled.FlexibleContainer>
        <Styled.GetAwaysContainer>
          <Styled.Heading>Getaways near you</Styled.Heading>
          {getAwayData.map((cardData, index) => (
            <GetAwayCard key={index} cardData={cardData} />
          ))}
        </Styled.GetAwaysContainer>
      </Styled.SearchWrapper>
    </Styled.Container>
  );
};

export default MobileSearch;
