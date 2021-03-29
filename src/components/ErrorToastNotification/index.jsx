import React from 'react';
import PropTypes from 'prop-types';

import { Container, Message } from './styles';

const ErrorToastNotification = ({ message, isVisible }) => (
  <Container isVisible={isVisible}>
    <Message isVisible={isVisible}>{message}</Message>
  </Container>
);

ErrorToastNotification.propTypes = {
  message: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default ErrorToastNotification;
