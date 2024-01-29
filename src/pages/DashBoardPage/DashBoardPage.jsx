import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./DashBoardPage.scss";
import MainHeader from "../../components/MainHeader/MainHeader";

const DashBoardPage = () => {
  return (
    <div className="page-wrapper">
      <div className="main-wrapper">
        <MainHeader />
        <div className="new-project">
          <button className="new-project__btn">new project</button>
        </div>
        <main className="dashboard-main">
          <nav className="dashboard-main__nav">
            <button className="dashboard-main__folder">show all</button>
            {/* <button className="dashboard-main__folder">project folder</button>
            <button className="dashboard-main__folder">project folder</button> */}
          </nav>
          <section className="dashboard-main__projects">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </section>
        </main>
      </div>
    </div>
  );
};
``;

export default DashBoardPage;
