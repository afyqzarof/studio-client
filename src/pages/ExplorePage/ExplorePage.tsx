import { useEffect, useState } from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import "./ExplorePage.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import axios from "axios";
import formatDate from "../../utils/format-date";
import FilterAside from "../../components/FilterAside/FilterAside";
import useFilterAside from "../../hooks/useFilterAside";
import useIsDemo from "../../hooks/useIsDemo";
import { Board } from "../../data/demo-dashboard";

const ExplorePage = () => {
  const baseUrl = process.env.VITE_BASE_URL;
  const isDemo = useIsDemo();
  const [exploreBoards, setExploreBoards] = useState<Board[]>([]);
  const { filterOptions, handleOptionChange } = useFilterAside(
    exploreBoards,
    setExploreBoards
  );

  const categories = [
    { label: "music", id: "music" },
    { label: "graphic design", id: "graphicDesign" },
    { label: "fashion", id: "fashion" },
    { label: "photography", id: "photography" },
    { label: "arts", id: "arts" },
    { label: "commercial", id: "commercial" },
    { label: "interior design", id: "interiorDesign" },
  ];
  useEffect(() => {
    const getExploreBoards = async () => {
      const token = isDemo ? "demo" : localStorage.getItem("token");
      const { data } = await axios.get(baseUrl + "/boards/public", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setExploreBoards(data);
    };
    getExploreBoards();
  }, []);

  return (
    <div className="page-wrapper">
      <MainHeader />
      <main className="explore-main">
        <nav className="explore-nav">
          <FilterAside
            handleOptionChange={handleOptionChange}
            categories={categories}
            filterOptions={filterOptions}
          />
        </nav>
        <section className="explore-boards">
          {exploreBoards.map((board) => (
            <div key={board.id}>
              <ProjectCard
                title={board.title}
                description={board.description}
                date={formatDate(board.created_at)}
                category={board.category}
                author={board.username}
                imgSrc={baseUrl + "/thumbnails/" + board.thumbnail}
                boardId={board.id}
              />
            </div>
          ))}
          {/* <ProjectCard
            title={"Title"}
            description="design work for work"
            date="04.08.18"
            category="interior design"
            author="stillness.archives"
          />
          <ProjectCard
            title={"Title"}
            description="design work for work"
            date="04.08.18"
            category="interior design"
            author="Imzzz"
          /> */}
        </section>
      </main>
    </div>
  );
};

export default ExplorePage;
