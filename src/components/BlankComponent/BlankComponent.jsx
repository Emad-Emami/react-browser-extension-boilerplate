import React from 'react';
import PropTypes from 'prop-types';

export default function BlankComponent({ children = 'BlankComponent' }) {
  return <div>{children}</div>;
}

BlankComponent.propTypes = {
  children: PropTypes.node,
};
