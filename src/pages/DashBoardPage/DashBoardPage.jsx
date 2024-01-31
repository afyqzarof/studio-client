import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./DashBoardPage.scss";
import MainHeader from "../../components/MainHeader/MainHeader";
import boardData from "../../data/boards-data";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DashBoardPage = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [boards, setBoards] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserBoards = async () => {
      const token = localStorage.getItem("token");

      const { data } = await axios.get(baseUrl + "/users/boards", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBoards(data);
    };
    fetchUserBoards();
  }, []);

  const handleNewProject = () => {
    // initialise a new board
    navigate("/board/1");
  };
  return (
    <div className="page-wrapper">
      <MainHeader />
      <div className="new-project">
        <button className="new-project__btn" onClick={handleNewProject}>
          new project
        </button>
      </div>
      <main className="dashboard-main">
        <nav className="dashboard-main__nav">
          <button className="dashboard-main__folder">show all</button>
        </nav>
        <ul className="dashboard-main__projects">
          {boards.map((board) => {
            const date = new Date(board.created_at);
            const formattedDate = date.toLocaleDateString().replace(/\//g, ".");

            return (
              <li key={board.id}>
                <ProjectCard
                  title={board.title}
                  imgSrc={baseUrl + "/thumbnails/" + board.thumbnail}
                  description={board.description}
                  date={formattedDate}
                  category={board.category}
                  boardId={board.id}
                />
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};
``;

export default DashBoardPage;
