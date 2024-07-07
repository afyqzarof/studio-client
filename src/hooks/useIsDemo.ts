import { usePathname } from "next/navigation";

export type IsDemo = boolean;
const useIsDemo = (): IsDemo => {
  const pathname = usePathname();
  const isDemo = pathname?.includes("demo");

  return isDemo || false;
};

export default useIsDemo;
