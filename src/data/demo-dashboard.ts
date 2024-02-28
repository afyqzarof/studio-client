import demoBoard1 from "../assets/thumbnails/demo-board-1.png";
import demoBoard2 from "../assets/thumbnails/demo-board-2.png";
import demoBoard3 from "../assets/thumbnails/demo-board-3.png";

export type Board = {
  id: string;
  title: string;
  created_at: string;
  thumbnail: string;
};

const demoBoards: Board[] = [
  {
    id: "demo-1",
    title: "brand identity",
    created_at: "2023-06-01",
    thumbnail: demoBoard3,
  },
  {
    id: "demo-2",
    title: "music inspiration",
    created_at: "2023-03-26",
    thumbnail: demoBoard2,
  },
  {
    id: "demo-3",
    title: "fashion",
    created_at: "2023-10-09",
    thumbnail: demoBoard1,
  },
];

export default demoBoards;
