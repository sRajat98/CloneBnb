import React, { useState, useRef, useEffect } from "react";
import RenderHeader from "../../components/RenderHeader/RenderHeader";

const Header = (props) => {
  const headerRef = useRef(null);
  const datePickerRef = useRef(null);

  const [state, updateState] = useState({ isCompactSearchVisible: false });
  const setState = (value) => updateState({ ...state, ...value });

  useEffect(() => {
    if (state.isCompactSearchVisible)
      return props.updateHeaderHeight(headerRef.current.offsetHeight);
    return props.updateHeaderHeight(
      headerRef.current.offsetHeight + datePickerRef.current.offsetHeight
    );
  }, [state.isCompactSearchVisible]);

  return (
    <RenderHeader
      headerRef={headerRef}
      datePickerRef={datePickerRef}
      isCompactSearchVisible={state.isCompactSearchVisible}
      setParentState={setState}
    />
  );
};

export default Header;
