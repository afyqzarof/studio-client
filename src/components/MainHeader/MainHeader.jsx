import useIsDemo from "../../hooks/useIsDemo";
import "./MainHeader.scss";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  const isDemo = useIsDemo;
  return (
    <header className="dash-header">
      <nav className="dash-nav">
        <NavLink
          to={isDemo ? "/demo/account" : "/account"}
          className="dash-nav__link">
          account
        </NavLink>
        <NavLink
          to={isDemo ? "/demo/dashboard" : "/dashboard"}
          className="dash-nav__link">
          dashboard
        </NavLink>
        <NavLink
          to={isDemo ? "/demo/explore" : "/explore"}
          className="dash-nav__link">
          explore
        </NavLink>
      </nav>
    </header>
  );
};

export default MainHeader;
