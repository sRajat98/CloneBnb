import React from "react";
import RenderLandingPage from "../../components/RenderLandingPage/RenderLandingPage";

const LandingPage = ({ headerHeight, deviceInfo }) => {
  return (
    <RenderLandingPage headerHeight={headerHeight} deviceInfo={deviceInfo} />
  );
};

export default LandingPage;
