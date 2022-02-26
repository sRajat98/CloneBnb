import styled from "styled-components";

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
`;

export const NavBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${(props) =>
    (props.isCompactSearchVisible && "var(--color-white)") ||
    "var(--color-balck)"};
  background-color: currentColor;
  padding: ${(props) => (props.isCompactSearchVisible && 1.5) || 2.4}rem
    var(--pd-l);
  transition: 250ms ease-in-out;
`;

export const Header = styled.h3`
  z-index: 2;
  color: ${(props) =>
    (props.isCompactSearchVisible && "var(--color-search-background)") ||
    "var(--color-white)"}; ;
`;
