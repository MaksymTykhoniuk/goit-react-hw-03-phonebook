import React from 'react';
import PropTypes from 'prop-types';
import { Title, Wrapper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
