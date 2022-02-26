import React, { useState } from "react";
import GlobalStyles from "./app/themes/GlobalStyles";
import Header from "./core/containers/Header/Header";
import LandingPage from "./core/containers/LandingPage/LandingPage";

const App = () => {
  const [state, updateState] = useState({ headerHeight: 0 });
  const setState = (value) => updateState({ ...state, ...value });

  const updateHeaderHeight = (headerHeight) => setState({ headerHeight });
  return (
    <div className="App">
      <GlobalStyles />
      <Header updateHeaderHeight={updateHeaderHeight} />
      <LandingPage headerHeight={state.headerHeight} />
    </div>
  );
};

export default App;
