import styled from "styled-components";
import { minMediaQueries } from "../../../utils/breakpoints";

export const Contianer = styled.main`
  color: var(--color-black);
  background-color: currentColor;
  @media (min-width: 850px) {
    padding-top: calc(${(props) => props.headerHeight}px + 1.6rem);
  }
`;

export const LandingImageContainer = styled.div`
  overflow: hidden;

  @media (min-width: 850px) {
    padding-top: calc(${(props) => props.headerHeight}px + 1.6rem);
    border-radius: 2rem;
  }
  @media ${minMediaQueries.laptop} {
    padding: 0 8rem;
  }
`;

export const imageMobileStyles = {
  width: "100%",
  "min-height": "120vh",
  "object-fit": "cover",
};

export const imageStyles = {
  width: "100%",
  "max-height": "100vh",
  "object-fit": "cover",
};
