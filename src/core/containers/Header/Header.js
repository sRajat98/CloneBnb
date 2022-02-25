import React, { useState } from "react";
import RenderHeader from "../../components/RenderHeader/RenderHeader";

const Header = () => {
  const [state, updateState] = useState({ isCompactSearchVisible: true });
  const setState = (value) => updateState({ ...state, ...value });

  return (
    <RenderHeader
      isCompactSearchVisible={state.isCompactSearchVisible}
      setParentState={setState}
    />
  );
};

export default Header;
