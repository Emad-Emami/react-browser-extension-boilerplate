import React from 'react';
import PropTypes from 'prop-types';

export default function BlankContainer({ children = 'BlankContainer' }) {
  return <div>{children}</div>;
}

BlankContainer.propTypes = {
  children: PropTypes.node,
};
