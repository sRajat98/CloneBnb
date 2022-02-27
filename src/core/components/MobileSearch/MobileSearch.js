import React from "react";
import Back from "../../../app/images/icons/Back";
import SvgContainer from "../../../app/themes/GlobalElements/SvgContainer.styled";
import FlexibleSearch from "../FlexibleSearch/FlexibleSearch";
import * as Styled from "./MobileSearch.styled";

const MobileSearch = (props) => {
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
        <FlexibleSearch />
      </Styled.SearchWrapper>
    </Styled.Container>
  );
};

export default MobileSearch;
