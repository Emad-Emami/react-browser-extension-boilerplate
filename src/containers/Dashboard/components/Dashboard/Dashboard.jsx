import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Scheduler from '@components/Scheduler';
import DefaultLayout from '@components/Layouts';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  {
    root: {
      width: 420,
    },
  },
  { name: 'Dashboard' },
);

export default function Dashboard({ className }) {
  const classes = useStyles();
  return (
    <DefaultLayout className={clsx(classes.root, className)}>
      <Scheduler />
    </DefaultLayout>
  );
}

Dashboard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
