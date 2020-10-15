import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import yocaleLogoSrc from '@assets/img/logo.png';
import shortYocaleLogoSrc from '@assets/img/short-logo.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  {
    root: {},
  },
  { name: 'YocaleLogo' },
);

export default function YocaleLogo({
  className,
  short = false,
  link = true,
  linkProps,
}) {
  const classes = useStyles();
  const image = (
    <img
      className={clsx(classes.root, className)}
      src={short ? shortYocaleLogoSrc : yocaleLogoSrc}
    />
  );
  return link ? (
    <a
      {...linkProps}
      rel="noreferrer"
      target="_blank"
      href="https://www.yocale.com"
    >
      {image}
    </a>
  ) : (
    image
  );
}

YocaleLogo.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  short: PropTypes.bool,
  link: PropTypes.bool,
  linkProps: PropTypes.object,
};
