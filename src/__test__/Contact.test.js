const { render, screen, fireEvent } = require("@testing-library/react");
const { default: Contact } = require("../components/Contact");
import "@testing-library/jest-dom";

it("should load the contact component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

it("should load the name input textbox on contact us", () => {
  render(<Contact />);
  const input = screen.getByPlaceholderText("name");
  fireEvent.change(input, {
    target: { value: "deepak" },
  });
  expect(input.value).toBe("deepak");
});
it("should load the message input textbox on contact us", () => {
  render(<Contact />);
  const inputMessage = screen.getByPlaceholderText("message");
  fireEvent.change(inputMessage, {
    target: { value: "message" },
  });
  expect(inputMessage.value).toBe("message");
});

it("should load the button on contact us", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(button).toBe;
});
it("should show alert when name and message is empty", () => {
  window.alert = jest.fn();
  render(<Contact />);
  const input = screen.getAllByRole("textbox");
  fireEvent.change(input[0], {
    target: { value: "" },
  });
  fireEvent.change(input[1], {
    target: { value: "" },
  });
  const submitButton = screen.getByRole("button", {
    name: /Submit/i,
  });

  fireEvent.click(submitButton);

  expect(window.alert).toHaveBeenCalled();
});

it("should show alert when submitted successfully", () => {
  window.alert = jest.fn();
  render(<Contact />);
  const input = screen.getAllByRole("textbox");
  fireEvent.change(input[0], {
    target: { value: "name" },
  });
  fireEvent.change(input[1], {
    target: { value: "message" },
  });
  const submitButton = screen.getByRole("button", {
    name: /Submit/i,
  });

  fireEvent.click(submitButton);

  expect(window.alert).toHaveBeenCalled();
});
