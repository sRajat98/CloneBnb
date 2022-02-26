import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: currentColor;
`;

export const TabsContianer = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 3.2rem;
  margin: 0 auto;
  font-size: var(--fs-200);
  color: var(--color-white);
`;

export const IndividualTab = styled.div``;

export const DatePickerContainer = styled.div`
  background-color: currentColor;
  padding-bottom: 1rem;
`;

export const DatePicker = styled(motion.div)`
  display: flex;
  width: fit-content;
  margin: 0 auto;
  overflow: hidden;
  background-color: var(--color-white);
  border-radius: 10rem;
  padding-right: 1rem;
`;

export const IndividualDatePickerTab = styled.div`
  padding: 1.5rem 0;
  padding-left: 3.5rem;
  padding-right: var(--pd-l);
`;

export const Label = styled.div`
  font-weight: 600;
  line-height: 1.6rem;
  margin-bottom: 0.5rem;
`;

export const Value = styled.div`
  color: var(--color-gray);
  font-size: var(--fs-100);
`;

export const SearchContainer = styled.div`
  width: 5rem;
  height: 5rem;
  margin: auto 0;
  padding: 2rem;
  color: var(--color-white);
  background-color: var(--color-search-background);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
