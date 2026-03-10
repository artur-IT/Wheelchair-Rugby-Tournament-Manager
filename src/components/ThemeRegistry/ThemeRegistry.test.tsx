import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ThemeRegistry from "./ThemeRegistry";

describe("ThemeRegistry", () => {
  it("renders children inside theme provider", () => {
    render(
      <ThemeRegistry>
        <div>Theme child</div>
      </ThemeRegistry>
    );

    expect(screen.getByText("Theme child")).toBeInTheDocument();
  });
});
