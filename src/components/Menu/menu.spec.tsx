import { render, screen } from "@testing-library/react";
import { Menu } from ".";

jest.mock("../../images/Calculator.png", () => "calculator.png");

describe("Menu component", () => {
  it("renders text li", () => {
    render(<Menu />);
    const menuComponent = screen.getByText("Home");
    expect(menuComponent).toBeInTheDocument();
  });
});
