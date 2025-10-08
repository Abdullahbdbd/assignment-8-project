import { useEffect } from "react";
import { useNavigationType } from "react-router";

const ScrollToTop = () => {
  const navigationType = useNavigationType();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigationType]);

  return null;
};

export default ScrollToTop;
