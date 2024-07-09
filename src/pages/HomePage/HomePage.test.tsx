// import { describe, it, expect } from "vitest";
// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// import HomePage from "./HomePage";

// describe("HomePage", () => {
//   it("should render", () => {
//     render(<HomePage />, { wrapper: BrowserRouter });
//     expect(screen.getByText(/articulate/)).toBeInTheDocument();
//   });

//   it("should have a svg", () => {
//     render(<HomePage />, { wrapper: BrowserRouter });
//     expect(screen.queryByAltText("studio logo")).toBeInTheDocument();
//   });

//   it("should change logo when mouse hover", async () => {
//     render(<HomePage />, { wrapper: BrowserRouter });
//     fireEvent.mouseEnter(screen.getByAltText("studio logo"));
//     const logo = await waitFor(() => screen.getByText(/click to enter/));

//     expect(logo).toHaveClass("homepage__descr");
//   });
// });
