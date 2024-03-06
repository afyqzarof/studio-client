import { describe, it, expect, beforeEach } from "vitest";
import { screen, render } from "@testing-library/react";
import renderWithRouter from "../../__tests__/utils/renderWithRouter";
import BoardHeader from "./BoardHeader";
import { ReactFlowProvider } from "reactflow";
import { Route, Routes, MemoryRouter } from "react-router-dom";
import { mockReactFlow } from "../../__tests__/utils/mockReactFlow";

beforeEach(() => {
  mockReactFlow();
});
describe("board header tests", () => {
  it("should render", () => {
    renderWithRouter(
      <ReactFlowProvider>
        <BoardHeader />
      </ReactFlowProvider>
    );
    expect(screen.getByPlaceholderText(/untitled/)).toBeInTheDocument();
  });

  it("should render with demo boards", () => {
    render(
      <MemoryRouter initialEntries={["/demo/board/demo-1"]}>
        <Routes>
          <Route
            path="/demo/board/:boardId"
            element={
              <ReactFlowProvider>
                <BoardHeader />
              </ReactFlowProvider>
            }
          />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByDisplayValue(/brand identity/)).toBeInTheDocument();
  });
});
