import React from 'react';
import useUserJwtTokenReconciler from '@containers/User/hooks/useUserJwtTokenReconciler';
import PropTypes from 'prop-types';

export default function UserCookieReconciler({ children }) {
  /* const isSynchronized =  */ useUserJwtTokenReconciler();
  // console.log({ isSynchronized });
  return <>{children}</>;
}

UserCookieReconciler.propTypes = {
  children: PropTypes.node,
};
