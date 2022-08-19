/**
 * TODO:
 * 1. Write a snapshot test and visually inspect it to insure that it is rendering correctly
 * 2. Get by label text and submit the form.
 * 3. Expect the name that you typed in the form `toBeInTheDocument()`.
 */

 import userEvent, { render, screen } from "@testing-library/react";
import App from "/App";

 it("enters name and displays it on header", () => {
   render(<App />);
   const input = screen.getByLabelText("name");
   userEvent.type(input, "jack");
   expect(screen.toBeInTheDocument("jack").value).toBe("Oh, Hi jack");
 });

 it("renders correctly", () => {
   const tree = renderer.create(App);
   expect(tree).toMatchSnapshot();
 });
