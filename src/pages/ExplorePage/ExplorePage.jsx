import { useEffect, useState } from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import "./ExplorePage.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import axios from "axios";
import formatDate from "../../utils/format-date";

const ExplorePage = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [exploreBoards, setExploreBoards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedFilter, setSelectedFilter] = useState("recent");
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };
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
      const token = localStorage.getItem("token");
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
          <div className="categories">
            <input
              type="radio"
              className="categories__radio"
              id="all"
              name="category"
              value="all"
              checked={selectedCategory === "all" ? "checked" : ""}
              onChange={handleCategoryChange}
            />
            <label
              className="categories__label categories__label--all"
              htmlFor="all">
              show all
            </label>
            {categories.map((category) => (
              <div key={category.id} className="categories__wrapper">
                <input
                  type="radio"
                  className="categories__radio"
                  id={category.id}
                  name="category"
                  value={category.id}
                  onChange={handleCategoryChange}
                />
                <label htmlFor={category.id} className="categories__label">
                  {category.label}
                </label>
              </div>
            ))}
          </div>
          <div className="filter">
            <input
              type="radio"
              className="filter__radio"
              id="recent"
              name="filter"
              value="recent"
              checked={selectedFilter === "recent" ? "checked" : ""}
              onChange={handleFilterChange}
            />
            <label className="filter__label" htmlFor="recent">
              show recent projects first
            </label>
            <input
              type="radio"
              className="filter__radio"
              id="oldest"
              name="filter"
              value="oldest"
              onChange={handleFilterChange}
            />
            <label className="filter__label" htmlFor="oldest">
              show oldest projects first
            </label>
          </div>
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
