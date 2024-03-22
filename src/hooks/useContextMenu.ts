import { useState, useEffect, MouseEvent } from "react";

const useContextMenu = () => {
  const [clicked, setClicked] = useState(false);
  const [points, setPoints] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleClick = () => setClicked(false);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  const handleContext = (e: MouseEvent<HTMLTitleElement>) => {
    e.preventDefault();
    console.log("Right Click", e.pageX, e.pageY);
    setClicked(true);
    setPoints({ x: e.pageX, y: e.pageY });
  };

  return { clicked, points, handleContext };
};

export default useContextMenu;
