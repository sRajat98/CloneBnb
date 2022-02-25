import React from "react";
import Search from "../../../app/images/icons/Search";
import SvgContainer from "../../../app/themes/GlobalElements/SvgContainer.styled";
import * as Styled from "./CompactSerach.styled";

const CompactSearch = (props) => {
  return (
    <Styled.Container
      layoutId="expandable-search"
      onClick={() => {
        props.setParentState({ isCompactSearchVisible: false });
      }}
    >
      <Styled.TextContainer>Start your search</Styled.TextContainer>
      <Styled.SearchContainer>
        <SvgContainer height="fit-content">
          <Search />
        </SvgContainer>
      </Styled.SearchContainer>
    </Styled.Container>
  );
};

export default CompactSearch;
