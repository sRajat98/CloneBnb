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
  color: var(--color-black);
  background-color: currentColor;
  padding: var(--pd-s) var(--pd-l);
`;

export const Header = styled.h3`
  z-index: 2;
  color: var(--color-white);
`;
