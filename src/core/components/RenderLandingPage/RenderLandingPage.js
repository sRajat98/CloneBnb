import React from "react";
import LandingPageImagex640 from "../../../app/images/landingPage/travel_small.jpg";
import LandingPageImagex1920 from "../../../app/images/landingPage/travel_medium.jpg";
import LandingPageImagex2400 from "../../../app/images/landingPage/travel_large.jpg";
import ImageView from "../../../app/themes/GlobalElements/ImageView/ImageView";
import * as Styled from "./RenderLandingPage.styled";

const RenderLandingPage = (props) => {
  return (
    <Styled.Contianer headerHeight={props.headerHeight}>
      <ImageView
        src={LandingPageImagex640}
        srcSet={`${LandingPageImagex640} 640w,
                 ${LandingPageImagex1920} 1200w, 
                ${LandingPageImagex2400} 2400w`}
        imageStyles={Styled.imageStyles}
      />
    </Styled.Contianer>
  );
};

export default RenderLandingPage;
