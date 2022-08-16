import PropTypes from "prop-types";

export default function Header({ name }) {
  return (
    <header>
      <h1 className="text-3xl">Hello {name}</h1>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};
