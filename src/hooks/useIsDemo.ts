import { useLocation } from "react-router-dom";

export type IsDemo = boolean;
const useIsDemo = (): IsDemo => {
  const { pathname } = useLocation();
  const isDemo = pathname.includes("demo");

  return isDemo;
};

export default useIsDemo;
