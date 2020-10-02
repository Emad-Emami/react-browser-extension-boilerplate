import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  {
    root: {},
  },
  { name: 'BlankComponent' },
);

export default function BlankComponent({
  children = 'BlankComponent',
  className,
}) {
  const classes = useStyles();
  return <div className={clsx(classes.root, className)}>{children}</div>;
}

BlankComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
