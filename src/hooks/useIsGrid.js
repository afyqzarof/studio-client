import { useState } from "react";

const useIsGrid = (value) => {
  const [isGrid, setIsGrid] = useState(value);
  const handleChangeGrid = () => {
    setIsGrid(!isGrid);
  };

  return { isGrid, handleChangeGrid };
};

export { useIsGrid };
