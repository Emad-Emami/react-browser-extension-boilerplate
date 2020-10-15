import React from 'react';
import Dashboard from './components/Dashboard';
import PropTypes from 'prop-types';

export default function DashboardWrapper() {
  return <Dashboard />;
}

DashboardWrapper.propTypes = {
  children: PropTypes.node,
};
