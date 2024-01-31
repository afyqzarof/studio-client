import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./DashBoardPage.scss";
import MainHeader from "../../components/MainHeader/MainHeader";
import boardData from "../../data/boards-data";
import { useEffect, useState } from "react";
import axios from "axios";

const DashBoardPage = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    const fetchUserBoards = async () => {
      const token = localStorage.getItem("token");
      console.log(token);

      const { data } = await axios.get(baseUrl + "/api/users/boards", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBoards(data);
    };
    fetchUserBoards();
  }, []);
  return (
    <div className="page-wrapper">
      <MainHeader />
      <div className="new-project">
        <button className="new-project__btn">new project</button>
      </div>
      <main className="dashboard-main">
        <nav className="dashboard-main__nav">
          <button className="dashboard-main__folder">show all</button>
        </nav>
        <ul className="dashboard-main__projects">
          {boards.map((board) => (
            <li key={board.id}>
              <ProjectCard
                title={board.title}
                imgSrc={baseUrl + "/api/thumbnails/" + board.thumbnail}
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
