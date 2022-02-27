import styled from "styled-components";
import { motion } from "framer-motion";
import { minMediaQueries } from "../../../utils/breakpoints";

export const Container = styled(motion.div)`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: currentColor;
  @media (max-width: 950px) {
    top: 100%;
  }
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
  background-color: var(--color-white);
  border-radius: 10rem;
  padding-right: 1rem;
  @media ${minMediaQueries.tablet} {
    max-width: 90vw;
  }
  @media ${minMediaQueries.laptop} {
    max-width: 80vw;
  }
`;

export const IndividualDatePickerTab = styled.div`
  position: ${(props) => (props.isSelected && "relative") || "unset"};
  padding: 1.5rem 0;
  padding-left: 3rem;
  padding-right: var(--pd-m);
  transition: all 250ms linear;
  cursor: pointer;
  box-shadow: ${(props) =>
    (props.isSelected && "0 4px 6px rgba(var(--color-rgb-black), 0.5)") ||
    "none"};
  &:hover {
    background-color: ${(props) =>
      (props.isSelected && "transparent") ||
      "rgba(var(--color-rgb-black), 0.05)"};
  }
  @media ${minMediaQueries.laptop} {
    padding-left: 2rem;
    padding-right: var(--pd-l);
  }

  @media ${minMediaQueries.laptopL} {
    padding-left: 3.5rem;
    padding-right: var(--pd-l);
  } ;
`;

export const Label = styled.div`
  font-weight: 600;
  line-height: 1.6rem;
  margin-bottom: 0.5rem;
`;

export const Value = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
