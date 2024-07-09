import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ExploreBoardHeader = () => {
  const arrow = "/icons/arrow-N-default.svg";
  const arrowHover = "/icons/arrow-N-selected.svg";
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);
  let token: string | null;
  useEffect(() => {
    token = localStorage.getItem("token");
  });

  const handleArrowClick = () => {
    if (!token) {
      router.push("/demo/explore");
      return;
    }
    router.push("/explore");
  };
  return (
    <img
      src={isHover ? arrowHover : arrow}
      alt="arrow"
      className="explore-arrow"
      onClick={handleArrowClick}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    />
  );
};

export default ExploreBoardHeader;
