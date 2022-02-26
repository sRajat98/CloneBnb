import React from "react";
import GlobalStyles from "./app/themes/GlobalStyles";
import Header from "./core/containers/Header/Header";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
    </div>
  );
};

export default App;
