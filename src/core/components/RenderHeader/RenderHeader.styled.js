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
    (props.isCompactSearchVisible && "var(--color-white)") || "transparent"};
  padding: 1.5rem 1.6rem;
  transition: 250ms ease-in-out;
  background-color: ${(props) =>
    (props.isCompactSearchVisible && "var(--color-white)") || "transparent"};
  @media (min-width: 850px) {
    color: ${(props) =>
      (props.isCompactSearchVisible && "var(--color-white)") ||
      "var(--color-balck)"};
    padding: ${(props) => (props.isCompactSearchVisible && 1.5) || 2.4}rem
      var(--pd-l);
  }
`;

export const Header = styled.h3`
  z-index: 2;
  color: ${(props) =>
    (props.isCompactSearchVisible && "var(--color-search-background)") ||
    "var(--color-white)"}; ;
`;
