import renderer from "react-test-renderer";
import Header from "./Header";

it("renders correctly", () => {
  const tree = renderer.create(<Header name="John Doe" />).toJSON();
  expect(tree).toMatchSnapshot();
});
