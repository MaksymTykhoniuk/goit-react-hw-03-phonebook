import React from 'react';
import PropTypes from 'prop-types';
import { NotificationMesssage } from './Notification.styled';

export const Notification = ({ message }) => {
  return <NotificationMesssage>{message}</NotificationMesssage>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
