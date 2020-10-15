import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import DefaultHeader from './components/Header';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  {
    root: {},
    content: {},
  },
  { name: 'DefaultLayout' },
);

export default function DefaultLayout({
  children,
  className,
  HeaderComponent: Header = DefaultHeader,
  HeaderProps,
}) {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <Header className={clsx(classes.header, HeaderProps?.className)} />
      <div className={classes.content}>{children}</div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  HeaderComponent: PropTypes.element,
  HeaderProps: PropTypes.object,
};
