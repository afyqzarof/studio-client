import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./DashBoardPage.scss";
import MainHeader from "../../components/MainHeader/MainHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import useFilterAside from "../../hooks/useFilterAside";
import FilterAside from "../../components/FilterAside/FilterAside";
import demoBoards from "../../data/demo-dashboard";
import useIsDemo from "../../hooks/useIsDemo";
import { Board } from "../../types/board";

const DashBoardPage = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [boards, setBoards] = useState<Board[]>([]);
  const router = useRouter();
  const { filterOptions, handleOptionChange } = useFilterAside(
    boards,
    setBoards
  );
  const isDemo = useIsDemo();
  const fetchUserBoards = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    try {
      const { data } = await axios.get<Board[]>(baseUrl + "/users/boards", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBoards(
        data.sort((a, b) => {
          return (
            new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf()
          );
        })
      );
    } catch (error) {
      localStorage.removeItem("token");
      router.push("/login");
    }
  };

  useEffect(() => {
    if (isDemo) {
      setBoards(demoBoards);
      return;
    }

    fetchUserBoards();
  }, []);

  const handleNewProject = async () => {
    if (isDemo) {
      router.push("/demo/board/new-board");
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
      router.push("/board/" + boardId);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (boardId: string) => {
    await axios.delete(baseUrl + "/boards/" + boardId);
    fetchUserBoards();
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
                  handleDelete={() => {
                    handleDelete(board.id);
                  }}
                  is_public={board.is_public}
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
