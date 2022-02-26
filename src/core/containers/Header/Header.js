import React, { useState, useRef, useEffect } from "react";
import useScrollEvent from "../../../utils/hooks/useScrollEvent";
import RenderHeader from "../../components/RenderHeader/RenderHeader";

const Header = (props) => {
  const headerRef = useRef(null);
  const datePickerRef = useRef(null);

  const [state, updateState] = useState({
    isCompactSearchVisible: false,
    isMobileSearchVisible: false,
  });
  const setState = (value) => updateState({ ...state, ...value });

  const handleScroll = (event) => {
    if (window.scrollY === 0)
      return setState({ isCompactSearchVisible: false });
    return setState({ isCompactSearchVisible: true });
  };
  useScrollEvent(handleScroll);

  const setIsMobileSearchVisible = (isMobileSearchVisible) =>
    setState({ isMobileSearchVisible });

  useEffect(() => {
    if (headerRef.current && datePickerRef.current) {
      props.updateHeaderHeight(
        headerRef.current.offsetHeight + datePickerRef.current.offsetHeight
      );
    }
  }, [headerRef.current, datePickerRef.current]);

  return (
    <RenderHeader
      headerRef={headerRef}
      datePickerRef={datePickerRef}
      isCompactSearchVisible={state.isCompactSearchVisible}
      setIsMobileSearchVisible={setIsMobileSearchVisible}
      isMobileSearchVisible={state.isMobileSearchVisible}
      deviceInfo={props.deviceInfo}
      setParentState={setState}
    />
  );
};

export default Header;
