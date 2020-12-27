/* eslint-disable jsx-a11y/accessible-emoji */
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Badge, Hidden, IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import { colors } from '@/theme/colors';

import AuthService from '@/services/AuthService';

const useStyles = makeStyles({
  root: {
    backgroundColor: colors.mountainMeadow[600],
  },
  left: {},
  right: {
    flexGrow: '1',
    textAlign: 'right',
  },
});

function Navbar(props) {
  const { onSidebarOpen } = props;

  const classes = useStyles();

  const [notifications] = useState([]);
  const handleLogOut = () => {
    AuthService.signOut();
    window.location = '/';
  };

  return (
    <AppBar
      className={classes.root}
    >
      <Toolbar>
        <div className={classes.left}>
          <Hidden mdDown>
            <IconButton
              color="inherit"
            >
              Logo 🐕
            </IconButton>
          </Hidden>
          <Hidden lgUp>
            <IconButton
              color="inherit"
              onClick={onSidebarOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </div>
        <div className={classes.right}>
          <IconButton
            aria-label="show 11 new notifications"
            color="inherit"
          >
            <Badge badgeContent={notifications.length + 1}>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            className="navbar__sign-out"
            color="inherit"
            onClick={handleLogOut}
          >
            <InputIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

Navbar.propTypes = {
  onSidebarOpen: PropTypes.func.isRequired,
};

export default Navbar;
