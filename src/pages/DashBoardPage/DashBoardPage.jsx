import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./DashBoardPage.scss";
import arrow from "../../assets/icons/arrow-white.svg";
import arrowHover from "../../assets/icons/arrow-white-hover.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const DashBoardPage = () => {
  const [isArrowHover, setIsArrowHover] = useState(false);
  return (
    <div className="page-wrapper">
      <div className="main-wrapper">
        <header className="dashboard-header">
          <h1 className="dashboard-header__title">project index </h1>
          <nav className="dashboard-header__nav">
            <ul className="dashboard-list">
              <li>list view</li>
              <li>search</li>
              <li>
                <button className="dashboard-list__btn">new project</button>
              </li>
            </ul>
          </nav>
        </header>
        <main className="dashboard-main">
          <nav className="dashboard-main__nav">
            <button className="dashboard-main__folder">project folder</button>
            <button className="dashboard-main__folder">project folder</button>
            <button className="dashboard-main__folder">project folder</button>
          </nav>
          <section className="dashboard-main__projects">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </section>
        </main>
      </div>
      <aside className="explore-aside">
        <Link
          className="explore-aside__container"
          onMouseEnter={() => {
            setIsArrowHover(true);
          }}
          onMouseLeave={() => {
            setIsArrowHover(false);
          }}>
          <h2 className="explore-aside__title">explore page</h2>
          <img
            src={isArrowHover ? arrowHover : arrow}
            alt="north east arrow"
            className="explore-aside__img"
          />
        </Link>
      </aside>
    </div>
  );
};
``;

export default DashBoardPage;
