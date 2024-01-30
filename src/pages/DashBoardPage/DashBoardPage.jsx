import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./DashBoardPage.scss";
import MainHeader from "../../components/MainHeader/MainHeader";
import boardData from "../../data/boards-data";

const DashBoardPage = () => {
  return (
    <div className="page-wrapper">
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
        <ul className="dashboard-main__projects">
          {boardData.map((board) => (
            <li key={board.id}>
              <ProjectCard
                title={board.title}
                imgSrc={board.imgSrc}
                description={board.description}
                date={board.date}
                category={board.category}
                boardId={board.id}
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
``;

export default DashBoardPage;
