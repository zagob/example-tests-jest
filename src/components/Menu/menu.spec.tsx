import { render } from "@testing-library/react";
import { Menu } from ".";

describe("Menu component", () => {
  it("renders text li", () => {
    render(<Menu />);
  });
});
