import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { breakpoints } from "../../../utils/breakpoints";
import Web from "../../../app/images/icons/Web";
import Profile from "../../../app/images/icons/Profile";
import Hamburger from "../../../app/images/icons/Hamburger";
import Applogo from "../../../app/images/icons/Applogo";
import AppLogoWoutText from "../../../app/images/icons/AppLogoWoutText";
import SvgContainer from "../../../app/themes/GlobalElements/SvgContainer.styled";
import CompactSearch from "../CompactSearch/CompactSearch";
import ExpandedSearch from "../ExpandedSearch/ExpandedSearch";
import * as Styled from "./RenderHeader.styled";
import ProfilePopup from "../ProfilePopup/ProfilePopup";

const RenderHeader = (props) => {
  return (
    <Styled.NavBar ref={props.headerRef}>
      <Styled.NavBarContainer
        isCompactSearchVisible={props.isCompactSearchVisible}
      >
        {props.deviceInfo.width >= 850 && (
          <Styled.Header isCompactSearchVisible={props.isCompactSearchVisible}>
            <SvgContainer styles={Styled.svgStyles}>
              {(props.deviceInfo.width >= breakpoints.laptop && (
                <Applogo
                  isCompactSearchVisible={props.isCompactSearchVisible}
                />
              )) || <AppLogoWoutText />}
            </SvgContainer>
          </Styled.Header>
        )}

        <AnimateSharedLayout type="crossfade">
          {props.deviceInfo.width < 850 || props.isCompactSearchVisible ? (
            <CompactSearch
              deviceInfo={props.deviceInfo}
              setIsMobileSearchVisible={props.setIsMobileSearchVisible}
              isMobileSearchVisible={props.isMobileSearchVisible}
              setIsCompactSearchVisible={props.setIsCompactSearchVisible}
            />
          ) : (
            <AnimatePresence>
              <ExpandedSearch
                datePickerRef={props.datePickerRef}
                isCompactSearchVisible={props.isCompactSearchVisible}
              />
            </AnimatePresence>
          )}
        </AnimateSharedLayout>
        <Styled.NavBarRightContainer
          isCompactSearchVisible={props.isCompactSearchVisible}
          isMobileSearchVisible={props.isMobileSearchVisible}
        >
          <Styled.BecomeAHostButton
            isCompactSearchVisible={props.isCompactSearchVisible}
          >
            Become a Host
          </Styled.BecomeAHostButton>
          <Styled.WebIconContainer
            isCompactSearchVisible={props.isCompactSearchVisible}
          >
            <Web />
          </Styled.WebIconContainer>
          <Styled.ProfileButton
            onClick={() =>
              props.setIsProfilePopupVisible(!props.isProfilePopupVisible)
            }
          >
            <SvgContainer styles={Styled.profileIconStyles}>
              <Hamburger />
            </SvgContainer>
            <SvgContainer styles={Styled.profileIconStyles}>
              <Profile />
            </SvgContainer>

            {props.isProfilePopupVisible && <ProfilePopup />}
          </Styled.ProfileButton>
        </Styled.NavBarRightContainer>
      </Styled.NavBarContainer>
    </Styled.NavBar>
  );
};

export default RenderHeader;
