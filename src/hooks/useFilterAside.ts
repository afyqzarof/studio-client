import React, { useState, Dispatch, SetStateAction } from "react";
import { Board } from "../data/demo-dashboard";

const useFilterAside = (
  boards: Board[],
  setBoards: Dispatch<SetStateAction<Board[]>>
) => {
  const [filterOptions, setFilterOptions] = useState({
    category: "all",
    filter: "recent",
  });

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterOptions({
      ...filterOptions,
      [e.target.name]: e.target.value,
    });

    switch (e.target.value) {
      case "oldest":
        setBoards(
          boards.sort((a, b) => {
            return (
              new Date(a.created_at).valueOf() -
              new Date(b.created_at).valueOf()
            );
          })
        );
        break;
      case "recent":
        setBoards(
          boards.sort((a, b) => {
            return (
              new Date(b.created_at).valueOf() -
              new Date(a.created_at).valueOf()
            );
          })
        );
        break;
      default:
        break;
    }
  };

  return { filterOptions, handleOptionChange };
};

export default useFilterAside;
