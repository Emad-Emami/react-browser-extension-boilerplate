import React from 'react';
import PropTypes from 'prop-types';
import useGetUserAuthentication from '@containers/User/hooks/useGetUserAuthentication';

export default function Authentication({ children = 'Authentication' }) {
  const userAuthentication = useGetUserAuthentication();
  console.log(userAuthentication);
  return <div>{children}</div>;
}

Authentication.propTypes = {
  children: PropTypes.node,
};
