import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./DashBoardPage.scss";
import MainHeader from "../../components/MainHeader/MainHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import useFilterAside from "../../hooks/useFilterAside";
import FilterAside from "../../components/FilterAside/FilterAside";
import demoBoards, { Board } from "../../data/demo-dashboard";
import useIsDemo from "../../hooks/useIsDemo";

const DashBoardPage = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [boards, setBoards] = useState<Board[]>([]);
  const navigate = useNavigate();
  const { filterOptions, handleOptionChange } = useFilterAside(
    boards,
    setBoards
  );
  const isDemo = useIsDemo();

  useEffect(() => {
    if (isDemo) {
      setBoards(demoBoards);
      return;
    }
    const fetchUserBoards = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }
      try {
        const { data } = await axios.get(baseUrl + "/users/boards", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBoards(data);
      } catch (error) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };
    fetchUserBoards();
  }, []);

  const handleNewProject = async () => {
    if (isDemo) {
      navigate("/demo/board/new-board");
      return;
    }

    const token = localStorage.getItem("token");
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
                  imgSrc={
                    isDemo
                      ? board.thumbnail
                      : baseUrl + "/thumbnails/" + board.thumbnail
                  }
                  description={board.description}
                  date={formattedDate}
                  category={board.category}
                  boardId={board.id}
                  author={false}
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
