import { usePathname } from "next/navigation";
import useIsDemo from "../../hooks/useIsDemo";
import "./MainHeader.scss";
import Link from "next/link";

const MainHeader = () => {
  const isDemo = useIsDemo();
  const pathname = usePathname();

  return (
    <header className="dash-header">
      <nav className="dash-nav">
        <Link
          href={isDemo ? "/demo/account" : "/account"}
          className={`dash-nav__link ${
            pathname?.includes("/account") ? "active" : ""
          }`}>
          account
        </Link>
        <Link
          href={isDemo ? "/demo/dashboard" : "/dashboard"}
          className={`dash-nav__link ${
            pathname?.includes("/dashboard") ? "active" : ""
          }`}>
          dashboard
        </Link>
        <Link
          href={isDemo ? "/demo/explore" : "/explore"}
          className={`dash-nav__link ${
            pathname?.includes("/explore") ? "active" : ""
          }`}>
          explore
        </Link>
      </nav>
    </header>
  );
};

export default MainHeader;
