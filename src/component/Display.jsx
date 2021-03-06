import React from "react";
import PropTypes from "prop-types";
import "./css/Display.css";

const Display = ({ displayValue }) => (
  <div className="display-container">
    <p className="display-value">{displayValue}</p>
  </div>
);

Display.propTypes = { displayValue: PropTypes.string.isRequired };

export default Display;
