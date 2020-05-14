import React from "react";
import "./css/Key.css";
import propTypes from "prop-types";

const Key = ({ keyAction, keyType, keyValue }) => (
  <div
    className={`key-container ${keyType}`}
    onClick={() => keyAction(keyValue)}
  >
    <p className="key-value">{keyValue}</p>
  </div>
);

Key.propTypes = {
  keyAction: propTypes.func.isRequired,
  keyType: propTypes.string.isRequired,
  keyValue: propTypes.string.isRequired,
};

export default Key;
