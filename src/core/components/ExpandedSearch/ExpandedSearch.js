import React from "react";
import Search from "../../../app/images/icons/Search";
import SvgContainer from "../../../app/themes/GlobalElements/SvgContainer.styled";
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
          <Styled.IndividualDatePickerTab>
            <Styled.Label>Location</Styled.Label>
            <Styled.Value>Where are you going?</Styled.Value>
          </Styled.IndividualDatePickerTab>
          <Styled.IndividualDatePickerTab>
            <Styled.Label>Check in</Styled.Label>
            <Styled.Value>Add Dates</Styled.Value>
          </Styled.IndividualDatePickerTab>
          <Styled.IndividualDatePickerTab>
            <Styled.Label>Check out</Styled.Label>
            <Styled.Value>Add Dates</Styled.Value>
          </Styled.IndividualDatePickerTab>
          <Styled.IndividualDatePickerTab>
            <Styled.Label>Guests</Styled.Label>
            <Styled.Value>Add Guests</Styled.Value>
          </Styled.IndividualDatePickerTab>
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
