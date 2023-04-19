import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button component", () => {
  it("renders button text", () => {
    render(<Button>teste</Button>);
    const buttonElement = screen.getByText("teste");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders click event", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>teste</Button>);
    const buttonElement = screen.getByText("teste");
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders button disabled", () => {
    const onClick = jest.fn();
    render(
      <Button disabled onClick={onClick}>
        teste
      </Button>
    );
    const buttonElement = screen.getByText("teste");
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveAttribute("disabled");
    expect(onClick).not.toHaveBeenCalledTimes(1);
  });
});
