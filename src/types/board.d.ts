export type Board = {
  id: string;
  title: string;
  created_at: string;
  thumbnail: string;
  description?: string;
  category?: string;
  username?: string;
  is_public: boolean;
};
