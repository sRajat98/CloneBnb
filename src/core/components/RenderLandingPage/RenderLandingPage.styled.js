import styled from "styled-components";
import { minMediaQueries } from "../../../utils/breakpoints";

export const Contianer = styled.main`
  color: var(--color-black);
  background-color: currentColor;
  @media (min-width: 850px) {
    padding-top: calc(${(props) => props.headerHeight}px + 3.5rem);
  }
`;
export const UtilityPaddingContainer = styled.div`
  position: relative;
  @media ${minMediaQueries.laptop} {
    padding: 0 8rem;
  }
`;

export const LandingImageContainer = styled.div`
  overflow: hidden;
  @media (min-width: 850px) {
    border-radius: 2rem;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 20%;
  transform: translateX(-50%);
  width: fit-content;
`;

export const Heading = styled.h3`
  font-size: var(--fs-500);
  color: var(--color-white);
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  width: fit-content;
  margin: 0 auto;
  display: block;
  padding: 1.5rem 3rem;
  background-color: var(--color-white);
  border-radius: 10rem;
  border: none;
`;

export const ButtonText = styled.div`
  background: linear-gradient(
    to right,
    var(--color-gradient-purple),
    var(--color-search-background) 75%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: var(--fs-200);
  font-weight: bold;
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
