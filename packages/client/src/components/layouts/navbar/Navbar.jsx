/* eslint-disable jsx-a11y/accessible-emoji */
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Badge, Hidden, IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

import './navbar.scss';

function Navbar(props) {
  const { onSidebarOpen } = props;

  const [notifications] = useState([]);

  return (
    <AppBar
      className="navbar"
    >
      <Toolbar>
        <div className="navbar__left">
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
        <div className="navbar__right">
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
