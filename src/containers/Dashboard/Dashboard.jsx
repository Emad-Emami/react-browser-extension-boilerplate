import React from 'react';
import PropTypes from 'prop-types';

export default function Dashboard({ children = 'Dashboard' }) {
  return <div>{children}</div>;
}

Dashboard.propTypes = {
  children: PropTypes.node,
};
