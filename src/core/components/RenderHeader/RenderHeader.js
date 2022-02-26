import React from "react";
import Applogo from "../../../app/images/icons/Applogo";
import SvgContainer from "../../../app/themes/GlobalElements/SvgContainer.styled";
import CompactSearch from "../CompactSearch/CompactSearch";
import ExpandedSearch from "../ExpandedSearch/ExpandedSearch";
import * as Styled from "./RenderHeader.styled";

const RenderHeader = (props) => {
  return (
    <Styled.NavBar ref={props.headerRef}>
      <Styled.NavBarContainer>
        <Styled.Header>
          <SvgContainer height="3.2rem">
            <Applogo />
          </SvgContainer>
        </Styled.Header>

        {(props.isCompactSearchVisible && (
          <CompactSearch setParentState={props.setParentState} />
        )) || <ExpandedSearch datePickerRef={props.datePickerRef} />}
      </Styled.NavBarContainer>
    </Styled.NavBar>
  );
};

export default RenderHeader;
