import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 30rem;
  background-color: var(--color-white);
  margin: 0 auto;
  padding: 1rem;
  border-radius: 10rem;
  box-shadow: 0 2px 4px rgba(var(--color-rgb-black), 0.4);
`;

export const TextContainer = styled.div`
  padding-left: 1.5rem;
  font-weight: 600;
  color: var(--color-gray);
`;
export const SearchContainer = styled.div`
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  margin-left: auto;
  border-radius: 50%;
  background-color: var(--color-search-background);
`;
