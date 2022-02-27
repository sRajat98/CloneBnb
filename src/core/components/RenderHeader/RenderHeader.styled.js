import styled from "styled-components";

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 2;
  box-shadow: 0px 2px 6px rgba(var(--color-rgb-black), 0.1);
`;

export const NavBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1.5rem 1.6rem;
  transition: 250ms ease-in-out;
  background-color: ${(props) =>
    (props.isCompactSearchVisible && "var(--color-white)") ||
    "var(--color-black)"};

  @media (min-width: 850px) {
    color: ${(props) =>
      (props.isCompactSearchVisible && "var(--color-white)") ||
      "var(--color-balck)"};
    padding: ${(props) => (props.isCompactSearchVisible && 1.5) || 2.4}rem
      var(--pd-l);
  }
  @media (max-width: 850px) {
    background-color: ${(props) =>
      (props.isCompactSearchVisible && "var(--color-white)") || "transparent"};
  }
`;

export const Header = styled.h3`
  color: ${(props) =>
    (props.isCompactSearchVisible && "var(--color-search-background)") ||
    "var(--color-white)"};
  z-index: 2;
`;

export const NavBarRightContainer = styled.div`
  margin-left: ${(props) =>
    (props.isCompactSearchVisible && "unset") || "auto"};
  display: flex;
  gap: 2.5rem;
  align-items: center;
  color: ${(props) =>
    (props.isCompactSearchVisible && "var(--color-black)") ||
    "var(--color-white)"};
  z-index: 2;

  @media (max-width: 849px) {
    display: none;
  }
`;

export const svgStyles = { height: "3.2rem" };

export const BecomeAHostButton = styled.div`
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    transform: translate(-15%, -28%);
    border-radius: 0.8rem;
    padding: 2rem;
    background-color: transparent;
    transition: all 250ms ease;
    z-index: -1;
  }
  &:hover:before {
    background-color: ${(props) =>
      (props.isCompactSearchVisible && "rgba(var(--color-rgb-black), 0.15)") ||
      "rgba(var(--color-rgb-white), 0.15)"};
  }
`;

export const ProfileButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-gray);
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0.8rem;
    background-color: var(--color-white);
    border: 1px solid rgb(var(--color-rgb-light-gray-border));
    transform: translate(-15%, -25%);
    border-radius: 10rem;
    z-index: -1;
  }
`;

export const WebIconContainer = styled.div`
  position: relative;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-30%, -30%);
    padding: 2rem;
    background-color: transparent;
    border-radius: 50%;
    transition: all 250ms ease;
    z-index: -1;
  }

  &:hover:before {
    background-color: ${(props) =>
      (props.isCompactSearchVisible && "rgba(var(--color-rgb-black), 0.15)") ||
      "rgba(var(--color-rgb-white), 0.15)"};
  }
`;

export const profileIconStyles = { height: "1.75rem" };
