import "./MainHeader.scss";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="dash-header">
      <nav className="dash-nav">
        <NavLink to="/account" className="dash-nav__link">
          account
        </NavLink>
        <NavLink to="/dashboard" className="dash-nav__link">
          dashboard
        </NavLink>
        <NavLink to="/explore" className="dash-nav__link">
          explore
        </NavLink>
      </nav>
    </header>
  );
};

export default MainHeader;
