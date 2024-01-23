import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
// import BoardPage from "./pages/BoardPage/BoardPage";
// import TestingPage from "./pages/TestingPage/TestingPage";
// import DashBoardPage from "./pages/DashBoardPage/DashBoardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/board/:boardId" element={<BoardPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/test" element={<TestingPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
