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

export const backIconStyles = { color: "var(--color-black)" };
