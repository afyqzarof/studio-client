import { useLocation } from "react-router-dom";
const useIsDemo = () => {
  const { pathname } = useLocation();
  const isDemo = pathname.includes("demo");

  return isDemo;
};

export default useIsDemo;
