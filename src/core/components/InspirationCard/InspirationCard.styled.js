import styled from "styled-components";

export const Container = styled.div`
  min-height: 38rem;
  border-radius: 1rem;
  overflow: hidden;
`;

export const TopContainer = styled.div`
  height: 50%;
`;

export const BottomContainer = styled.div`
  height: 50%;
  background-color: var(--color-inspirations-card);
  padding: 1.5rem;
  color: var(--color-white);
`;

export const Heading = styled.h3`
  font-size: var(--fs-250);
  margin-bottom: 0.8rem;
`;

export const Distance = styled.p`
  font-size: var(--fs-200);
`;

export const imageStyles = { width: "100%", height: "100%" };
