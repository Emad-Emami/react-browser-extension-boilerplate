import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import useGetUserAuthentication from '@containers/User/hooks/useGetUserAuthentication';

export default function AuthenticatedRoute(props) {
  const userAuthentication = useGetUserAuthentication();
  if (!userAuthentication) {
    return <Redirect to="/authentication" />;
  }
  return <Route {...props} />;
}

AuthenticatedRoute.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
