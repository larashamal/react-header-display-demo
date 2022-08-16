import PropTypes from "prop-types";

export default function Header({ name }) {
  return <h1 className="my-8 text-center text-3xl">Hello {name}</h1>;
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};
