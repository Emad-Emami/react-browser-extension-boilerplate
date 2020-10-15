import React from 'react';
import PropTypes from 'prop-types';
import YocaleLogo from '@components/YocaleLogo';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Divider, Toolbar } from '@material-ui/core';

const useStyles = makeStyles(
  ({ spacing }) => ({
    root: {},
    toolbar: {},
    logo: {
      height: spacing(5),
    },
  }),
  { name: 'Header' },
);

export default function Header({
  LogoComponent: Logo = YocaleLogo,
  LogoProps,
  className,
}) {
  const classes = useStyles();
  return (
    <AppBar
      className={clsx(classes.root, className)}
      color="inherit"
      position="sticky"
      elevation={0}
    >
      <Toolbar className={classes.toolbar}>
        <Logo
          short
          {...LogoProps}
          className={clsx(classes.logo, LogoProps?.className)}
        />
      </Toolbar>
      <Divider />
    </AppBar>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  LogoProps: PropTypes.bool,
  LogoComponent: PropTypes.element,
};
