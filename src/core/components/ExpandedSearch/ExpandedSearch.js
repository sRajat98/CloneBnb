import React from "react";
import Search from "../../../app/images/icons/Search";
import SvgContainer from "../../../app/themes/GlobalElements/SvgContainer.styled";
import { ExpandedSearchDatePickerTabs } from "../../containers/Header/HeaderUtils";

import * as Styled from "./ExpandedSearch.styled";

const ExpandedSearch = (props) => {
  return (
    <Styled.Container exit={{ opacity: 0, transition: { duration: 0.15 } }}>
      <Styled.TabsContianer>
        <Styled.IndividualTab>Places to stay</Styled.IndividualTab>
        <Styled.IndividualTab>Experiences</Styled.IndividualTab>
        <Styled.IndividualTab>Online Experiences</Styled.IndividualTab>
      </Styled.TabsContianer>
      <Styled.DatePickerContainer ref={props.datePickerRef}>
        <Styled.DatePicker
          layoutId="expandable-search"
          transition={{
            duration: 0.2,
          }}
        >
          {ExpandedSearchDatePickerTabs.map((individualTab, index) => (
            <Styled.IndividualDatePickerTab
              key={index}
              onClick={() => props.setExpandedSearchSelectedTab(index)}
              isSelected={
                individualTab.value === props.expandedSearchSelectedTab
              }
            >
              <Styled.Label>{individualTab.label}</Styled.Label>
              <Styled.Value>{individualTab.placeholder}</Styled.Value>
            </Styled.IndividualDatePickerTab>
          ))}
          <Styled.SearchContainer>
            <SvgContainer height="fit-content">
              <Search />
            </SvgContainer>
          </Styled.SearchContainer>
        </Styled.DatePicker>
      </Styled.DatePickerContainer>
    </Styled.Container>
  );
};

export default ExpandedSearch;
