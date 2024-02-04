import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import BoardPage from "./pages/BoardPage/BoardPage";
import DashBoardPage from "./pages/DashBoardPage/DashBoardPage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import ExploreBoardPage from "./pages/ExploreBoardPage/ExploreBoardPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/board/:boardId" element={<BoardPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/explore/:boardId" element={<ExploreBoardPage />} />
        <Route path="/account" element={<ProfilePage />} />
        <Route path="/demo/explore" element={<ExplorePage />} />
        <Route path="/demo/dashboard" element={<DashBoardPage />} />
        <Route path="/demo/board/:boardId" element={<BoardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
