import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import YocaleLogo from '@components/YocaleLogo';
import { makeStyles, fade } from '@material-ui/core/styles';
import { Typography, Button, Link } from '@material-ui/core';
import DoneOutline from '@material-ui/icons/DoneOutline';

const useStyles = makeStyles(
  ({ spacing, palette, shape }) => ({
    root: {
      width: 320,
      height: 360,
      padding: spacing(1, 2, 4, 2),
    },
    logo: {
      width: 110,
      margin: spacing(1, 'auto'),
      display: 'block',
    },
    infoBox: {
      border: `1px solid ${palette.secondary.main}`,
      borderRadius: shape.borderRadius,
      padding: spacing(1, 2),
      margin: spacing(2, 0),
      background: fade(palette.secondary.main, 0.07),
    },
    unorderedList: {
      listStyle: 'none',
      padding: 0,
      color: palette.secondary.main,
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
    },
    checkBullet: {
      marginRight: spacing(1.5),
      color: palette.secondary.main,
    },
    loginButton: {
      width: 140,
      display: 'block',
      textAlign: 'center',
      marginBottom: spacing(2),
    },
  }),
  { name: 'Authentication' },
);

export default function Authentication({ className }) {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <YocaleLogo className={classes.logo} />
      <Typography align="center" variant="body1" color="primary">
        Upgrade Your Business Today
      </Typography>
      <div className={classes.infoBox}>
        <Typography align="center" variant="body1" color="secondary">
          Triple Boost (3x) Your Business
        </Typography>
        <ul className={classes.unorderedList}>
          <li className={classes.listItem}>
            <DoneOutline fontSize="small" className={classes.checkBullet} />
            <Typography variant="caption">Online Scheduling</Typography>
          </li>
          <li className={classes.listItem}>
            <DoneOutline fontSize="small" className={classes.checkBullet} />
            <Typography variant="caption">Reminders & Notifications</Typography>
          </li>
          <li className={classes.listItem}>
            <DoneOutline fontSize="small" className={classes.checkBullet} />
            <Typography variant="caption">POS & Invoicing</Typography>
          </li>
          <li className={classes.listItem}>
            <DoneOutline fontSize="small" className={classes.checkBullet} />
            <Typography variant="caption">CRM</Typography>
          </li>
          <li className={classes.listItem}>
            <DoneOutline fontSize="small" className={classes.checkBullet} />
            <Typography variant="caption">Reserve With Google</Typography>
          </li>
          <li className={classes.listItem}>
            <DoneOutline fontSize="small" className={classes.checkBullet} />
            <Typography variant="caption">Omnichannel Booking</Typography>
          </li>
        </ul>
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          className={classes.loginButton}
          component="a"
          target="_blank"
          href="https://www.yocale.com/login"
        >
          Login
        </Button>
        <Typography component="div" variant="caption" color="textSecondary">
          {"Don't have an account? "}
          <Link
            component="a"
            target="_blank"
            href="https://www.yocale.com/registration"
            color="secondary"
          >
            Sign up
          </Link>
        </Typography>
      </div>
    </div>
  );
}

Authentication.propTypes = {
  className: PropTypes.string,
};
