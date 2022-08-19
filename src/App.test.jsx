/**
 * TODO:
 * 1. Write a snapshot test and visually inspect it to insure that it is rendering correctly
 * 2. Get by label text
 * 3. Use `userEvent` to type in the input field and submit the form.
 * 3. Expect the name that you typed in the form `toBeInTheDocument()`.
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import App from "./App";

it("renderers without crashing", () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toMatchSnapshot();
});

// it("calls the submit handler when the form is submitted", () => {
//   const handleSubmit = jest.fn();

//   render(<Form setName={handleSubmit} />);
//   const submitBtn = screen.getByRole("button", { name: /submit/i });

//   userEvent.click(submitBtn);
//   expect(handleSubmit).toHaveBeenCalled();
// });

it("enters name and displays on header", () => {
  const nameInput = "Sara";

  render(<App />);

  const h1 = screen.getByRole("heading", { level: 1 });
  const input = screen.getByLabelText(/name/i);
  const submitBtn = screen.getByRole("button");
  userEvent.type(input, nameInput);
  userEvent.click(submitBtn);

  const h2 = screen.getByRole("heading", { level: 2 });
  screen.getByAltText(nameInput);

  expect(h1.textContent).toContain(nameInput);
  expect(h2.textContent).toContain(nameInput);
});
