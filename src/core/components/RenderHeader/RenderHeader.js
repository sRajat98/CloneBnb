import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Applogo from "../../../app/images/icons/Applogo";
import SvgContainer from "../../../app/themes/GlobalElements/SvgContainer.styled";
import CompactSearch from "../CompactSearch/CompactSearch";
import ExpandedSearch from "../ExpandedSearch/ExpandedSearch";
import * as Styled from "./RenderHeader.styled";

const RenderHeader = (props) => {
  return (
    <Styled.NavBar ref={props.headerRef}>
      <Styled.NavBarContainer
        isCompactSearchVisible={props.isCompactSearchVisible}
      >
        <Styled.Header isCompactSearchVisible={props.isCompactSearchVisible}>
          <SvgContainer height="3.2rem">
            <Applogo />
          </SvgContainer>
        </Styled.Header>
        <AnimateSharedLayout type="crossfade">
          {props.isCompactSearchVisible ? (
            <CompactSearch setParentState={props.setParentState} />
          ) : (
            <AnimatePresence>
              <ExpandedSearch
                datePickerRef={props.datePickerRef}
                setParentState={props.setParentState}
                isCompactSearchVisible={props.isCompactSearchVisible}
              />
            </AnimatePresence>
          )}
        </AnimateSharedLayout>
      </Styled.NavBarContainer>
    </Styled.NavBar>
  );
};

export default RenderHeader;
