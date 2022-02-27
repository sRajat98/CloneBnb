import React, { useState, useEffect } from "react";
import GlobalStyles from "./app/themes/GlobalStyles";
import Header from "./core/containers/Header/Header";
import useWindowSize from "./utils/hooks/useWindowSize";
import LandingPage from "./core/containers/LandingPage/LandingPage";
import NextTripInspiration from "./core/components/NextTripInspiration/NextTripInspiration";

const App = () => {
  const { width, height } = useWindowSize();
  const [state, updateState] = useState({
    headerHeight: 0,
    deviceInfo: { width: 0, height: 0 },
  });
  const setState = (value) => updateState({ ...state, ...value });

  const updateHeaderHeight = (headerHeight) => setState({ headerHeight });

  useEffect(() => {
    setState({ deviceInfo: { width, height } });
  }, [width, height]);

  return (
    <div className="App">
      <GlobalStyles />
      <Header
        deviceInfo={state.deviceInfo}
        updateHeaderHeight={updateHeaderHeight}
      />
      <LandingPage
        deviceInfo={state.deviceInfo}
        headerHeight={state.headerHeight}
      />
      <NextTripInspiration />
    </div>
  );
};

export default App;
