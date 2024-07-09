export type Board = {
  id: string;
  title: string;
  created_at: string;
  thumbnail: string;
  description?: string;
  category?: string;
  username?: string;
};

const demoBoards: Board[] = [
  {
    id: "demo-1",
    title: "brand identity",
    created_at: "2023-03-23",
    thumbnail: "/thumbnails/demo-1.png",
    description: "trying to communicate the vibe (if you get what i mean)",
  },
];

export default demoBoards;
