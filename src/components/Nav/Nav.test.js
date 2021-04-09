import React from "react";
import { render, screen } from "@testing-library/react";

import { Nav } from "./Nav";

describe("Nav", () => {
  it("renders a navigation element", () => {
    render(<Nav />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
