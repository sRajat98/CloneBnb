import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to right,
    var(--color-gradient-purple),
    var(--color-search-background) 75%
  );
`;

export const SearchWrapper = styled.div`
  height: 95vh;
  margin-top: 5vh;
  border-radius: 2rem 2rem 0 0;
  padding: var(--pd-s);
  overflow-y: auto;
  background-color: var(--color-white);
`;

export const TopContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.6rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: var(--fs-200);

  &::placeholder {
    color: var(--color-gray);
    font-weight: lighter;
  }
  &:focus {
    outline: none;
  }
`;

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

export const backIconStyles = { color: "var(--color-black)" };

export const forwardIconStyles = { transform: "rotate(180deg)" };
