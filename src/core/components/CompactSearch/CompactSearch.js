import React from "react";
import Search from "../../../app/images/icons/Search";
import SvgContainer from "../../../app/themes/GlobalElements/SvgContainer.styled";
import * as Styled from "./CompactSerach.styled";

const CompactSearch = (props) => {
  return (
    <Styled.Container
      layout
      layoutId="expandable-search"
      onClick={() => {
        props.setParentState({ isCompactSearchVisible: false });
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.05 }}
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
