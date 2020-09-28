import React from 'react';
import PropTypes from 'prop-types';

export default function User({ children = 'User' }) {
  return <div>{children}</div>;
}

User.propTypes = {
  children: PropTypes.node,
};
