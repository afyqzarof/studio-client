import { useState } from "react";

const useFilterAside = (boards, setBoards) => {
  const [filterOptions, setFilterOptions] = useState({
    category: "all",
    filter: "recent",
  });

  const handleOptionChange = (e) => {
    setFilterOptions({
      ...filterOptions,
      [e.target.name]: e.target.value,
    });

    switch (e.target.value) {
      case "oldest":
        setBoards(
          boards.sort((a, b) => {
            return new Date(a.created_at) - new Date(b.created_at);
          })
        );
        break;
      case "recent":
        setBoards(
          boards.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
          })
        );

      default:
        break;
    }
  };

  return { filterOptions, handleOptionChange };
};

export default useFilterAside;
