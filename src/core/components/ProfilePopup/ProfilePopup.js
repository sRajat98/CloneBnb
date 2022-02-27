import React from "react";
import { AnimatePresence } from "framer-motion";
import * as Styled from "./ProfilePopup.styled";

const ProfilePopup = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Styled.Container
        transition={{ ease: "easeInOut", duration: 0.1 }}
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -12, opacity: 0, transition: { duration: 0.1 } }}
      >
        <Styled.UserDataWrapper>
          <Styled.ProfilePopupTab>Sign Up</Styled.ProfilePopupTab>
          <Styled.ProfilePopupTab>Login</Styled.ProfilePopupTab>
        </Styled.UserDataWrapper>
        <Styled.ProfilePopupTab>Host your home</Styled.ProfilePopupTab>
        <Styled.ProfilePopupTab>Host an experience</Styled.ProfilePopupTab>
        <Styled.ProfilePopupTab>Help</Styled.ProfilePopupTab>
      </Styled.Container>
    </AnimatePresence>
  );
};

export default ProfilePopup;
