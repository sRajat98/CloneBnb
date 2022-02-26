import React, { useState, useRef, useEffect } from "react";
import useScrollEvent from "../../../utils/hooks/useScrollEvent";
import RenderHeader from "../../components/RenderHeader/RenderHeader";

const Header = (props) => {
  const headerRef = useRef(null);
  const datePickerRef = useRef(null);

  const [state, updateState] = useState({ isCompactSearchVisible: false });
  const setState = (value) => updateState({ ...state, ...value });

  const handleScroll = (event) => {
    if (window.scrollY === 0)
      return setState({ isCompactSearchVisible: false });
    return setState({ isCompactSearchVisible: true });
  };
  useScrollEvent(handleScroll);

  useEffect(() => {
    // if (state.isCompactSearchVisible)
    //   return props.updateHeaderHeight(headerRef.current.offsetHeight);
    return props.updateHeaderHeight(
      // headerRef.current.offsetHeight + datePickerRef.current.offsetHeight
      176
    );
  }, []);

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
