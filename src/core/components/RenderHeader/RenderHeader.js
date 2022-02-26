import React from "react";
import Applogo from "../../../app/images/icons/Applogo";
import SvgContainer from "../../../app/themes/GlobalElements/SvgContainer.styled";
import CompactSearch from "../CompactSearch/CompactSearch";
import ExpandedSearch from "../ExpandedSearch/ExpandedSearch";
import * as Styled from "./RenderHeader.styled";

const RenderHeader = (props) => {
  return (
    <Styled.NavBar>
      <Styled.Header>
        <SvgContainer height="3.2rem">
          <Applogo />
        </SvgContainer>
      </Styled.Header>
      {(props.isCompactSearchVisible && (
        <CompactSearch setParentState={props.setParentState} />
      )) || <ExpandedSearch />}
    </Styled.NavBar>
  );
};

export default RenderHeader;
