import React from "react";
import PropTypes from "prop-types";
import "./Chip.css";

function Chip({ name }) {
	return <li className={"type " + name}>{name}</li>;
}

Chip.propTypes = {
	/**
	 * Is this the principal call to action on the page?
	 */
	name: PropTypes.string,
};

Chip.defaultProps = {
	name: "normal",
};

export default Chip;
