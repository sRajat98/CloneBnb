import styled from "styled-components";

export const Contianer = styled.main`
  padding: 0 8rem;
  padding-top: calc(${(props) => props.headerHeight}px + 1.6rem);
  color: var(--color-black);
  background-color: currentColor;
`;

export const imageStyles = {
  width: "100%",
  maxHeight: "100vh",
  "object-fit": "cover",
  "border-radius": "2rem",
};
