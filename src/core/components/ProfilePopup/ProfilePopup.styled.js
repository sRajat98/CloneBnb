import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: absolute;
  top: calc(100% + 2rem);
  left: -16rem;
  background-color: var(--color-white);
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(var(--color-rgb-black), 0.5);
`;

export const UserDataWrapper = styled.div`
  border-bottom: 1px solid rgb(var(--color-rgb-light-gray-border));
`;

export const ProfilePopupTab = styled.div`
  padding: 1.5rem 2rem;
  padding-right: 7rem;
  white-space: nowrap;
  font-size: var(--fs-100);
  text-align: left;
  transition: all 400ms ease;
  &:hover {
    background-color: rgba(var(--color-rgb-black), 0.05);
  }
`;
