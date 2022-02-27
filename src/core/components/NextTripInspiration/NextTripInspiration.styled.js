import styled from "styled-components";
import { minMediaQueries } from "../../../utils/breakpoints";

export const Container = styled.section`
  padding-top: 3rem;
  margin-bottom: 10rem;

  @media ${minMediaQueries.mobileS} {
    padding: 0 1.6rem;
    padding-top: 4rem;
  }

  @media (min-width: 850px) {
    padding: 0 8rem;
    padding-top: 8rem;
  }
`;

export const Heading = styled.h2`
  font-size: var(--fs-300);
  color: var(--color-light-black);
  margin-bottom: 5rem;
`;

export const InspirationCardsContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
`;
