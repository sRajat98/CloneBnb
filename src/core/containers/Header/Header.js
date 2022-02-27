import React, { useState, useRef, useEffect } from "react";
import useScrollEvent from "../../../utils/hooks/useScrollEvent";
import useDisabledBodyScroll from "../../../utils/hooks/useDisabledBodyScroll";
import RenderHeader from "../../components/RenderHeader/RenderHeader";

const Header = (props) => {
  const headerRef = useRef(null);
  const datePickerRef = useRef(null);

  const [state, updateState] = useState({
    isCompactSearchVisible: false,
    isMobileSearchVisible: false,
  });
  const setState = (value) => updateState({ ...state, ...value });

  useDisabledBodyScroll(state.isMobileSearchVisible);
  const handleScroll = (event) => {
    if (window.scrollY === 0)
      return setState({ isCompactSearchVisible: false });
    return setState({ isCompactSearchVisible: true });
  };
  useScrollEvent(handleScroll);

  const setIsMobileSearchVisible = (isMobileSearchVisible) =>
    setState({ isMobileSearchVisible });

  const setIsCompactSearchVisible = (isCompactSearchVisible) =>
    setState({ isCompactSearchVisible });

  useEffect(() => {
    if (headerRef.current && datePickerRef.current) {
      props.updateHeaderHeight(
        headerRef.current.offsetHeight + datePickerRef.current.offsetHeight
      );
    }
  }, [headerRef.current, datePickerRef.current]);

  useEffect(() => {
    if (props.deviceInfo.width > 850) {
      setState({
        isCompactSearchVisible: false,
        isMobileSearchVisible: false,
      });
    }
  }, [props.deviceInfo.width]);

  return (
    <RenderHeader
      headerRef={headerRef}
      datePickerRef={datePickerRef}
      isCompactSearchVisible={state.isCompactSearchVisible}
      isMobileSearchVisible={state.isMobileSearchVisible}
      setIsMobileSearchVisible={setIsMobileSearchVisible}
      setIsCompactSearchVisible={setIsCompactSearchVisible}
      deviceInfo={props.deviceInfo}
    />
  );
};

export default Header;
