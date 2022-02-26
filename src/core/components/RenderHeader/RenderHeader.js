import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { breakpoints } from "../../../utils/breakpoints";
import Applogo from "../../../app/images/icons/Applogo";
import AppLogoWoutText from "../../../app/images/icons/AppLogoWoutText";
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
        {props.deviceInfo.width >= 850 && (
          <Styled.Header isCompactSearchVisible={props.isCompactSearchVisible}>
            <SvgContainer height="3.2rem">
              {(props.deviceInfo.width >= breakpoints.laptop && (
                <Applogo />
              )) || <AppLogoWoutText />}
            </SvgContainer>
          </Styled.Header>
        )}

        <AnimateSharedLayout type="crossfade">
          {props.deviceInfo.width < 850 || props.isCompactSearchVisible ? (
            <CompactSearch
              deviceInfo={props.deviceInfo}
              setParentState={props.setParentState}
              setIsMobileSearchVisible={props.setIsMobileSearchVisible}
              isMobileSearchVisible={props.isMobileSearchVisible}
            />
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
