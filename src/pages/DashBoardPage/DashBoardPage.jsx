import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./DashBoardPage.scss";
import MainHeader from "../../components/MainHeader/MainHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import useFilterAside from "../../hooks/useFilterAside";
import FilterAside from "../../components/FilterAside/FilterAside";
import demoBoards from "../../data/demo-dashboard";

const DashBoardPage = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [boards, setBoards] = useState([]);
  const navigate = useNavigate();
  const { filterOptions, handleOptionChange } = useFilterAside(
    boards,
    setBoards
  );
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes("demo")) {
      setBoards(demoBoards);
      return;
    }
    const fetchUserBoards = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const { data } = await axios.get(baseUrl + "/users/boards", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBoards(data);
    };
    fetchUserBoards();
  }, []);

  const handleNewProject = async () => {
    const token = localStorage.getItem("token");
    console.log(token);

    try {
      const { data } = await axios.post(
        baseUrl + "/boards/new",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const { id: boardId } = data;
      navigate("/board/" + boardId);
    } catch (error) {
      console.log(error);
    }
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
          <FilterAside
            filterOptions={filterOptions}
            handleOptionChange={handleOptionChange}
            categories={[]}
          />
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

export default DashBoardPage;
