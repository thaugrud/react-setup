import React from 'react';
import PropTypes from 'prop-types';

/*
  CustomButton Component
  @param {string} name
  @param {func} handleClick
  @returns button element
 */
const CustomButton = ({ name, handleClick }) => (
    <input className="button" type="button" value={name} onClick={handleClick} />
);

CustomButton.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CustomButton;
