import { useEffect } from "react";

const useScrollEvent = (handleScroll) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return;
};

export default useScrollEvent;
