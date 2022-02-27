import styled from "styled-components";

export const FlexibleContainer = styled.div``;

export const Heading = styled.h4`
  text-transform: uppercase;
  color: var(--color-gray);
  margin-bottom: 2rem;
`;

export const IAmFlexibleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1.5rem;
  color: var(--color-gray);
  border-radius: 10rem;
  box-shadow: rgba(var(--color-rgb-black), 12%) 0px 6px 16px;
  border: 1px solid rgb(var(--color-rgb-light-gray-border));
  & div {
    color: var(--color-gradient-purple);
    font-size: var(--fs-200);
  }
`;

export const GetAwaysContainer = styled.div`
  margin-top: 2.5rem;
`;

export const forwardIconStyles = { transform: "rotate(180deg)" };
