import React from 'react';
import PropTypes from 'prop-types';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from './styles';

const BtnReturn = ({ text, isStyled }) => (
  <Button to="/" isStyled={isStyled}>
    <IoArrowBack size={isStyled ? 24 : 18} /> {text}
  </Button>
);

BtnReturn.defaultProps = {
  isStyled: false,
};

BtnReturn.propTypes = {
  text: PropTypes.string.isRequired,
  isStyled: PropTypes.bool,
};

export default BtnReturn;
