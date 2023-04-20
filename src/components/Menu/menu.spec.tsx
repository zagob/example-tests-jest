import { fireEvent, render, screen, renderHook } from "@testing-library/react";
import { Menu } from ".";

jest.mock("../../images/Calculator.png", () => "calculator.png");

describe("Menu component", () => {
  it("renders text li", () => {
    render(<Menu />);
    const menuComponent = screen.getByText("Home");
    expect(menuComponent).toBeInTheDocument();
  });

  it("should clicked button", () => {
    render(<Menu />);
    const { result } = renderHook(() => Menu());
    const button = screen.getByText("Click Me!");
    const p = screen.getByText("auth: false");
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(p).toBeInTheDocument();
  });
});
