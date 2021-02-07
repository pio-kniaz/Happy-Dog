import { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

import AuthService from '@/services/AuthService';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    'justify-content': 'flex-end',
  },
  menuList: {
    minWidth: '165px',
    padding: '0px',
    outline: 'none',
  },
  menuItem: {
    minHeight: '40px',
  },
}));

function UserAccount() {
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    AuthService.signOut();
    handleClose();
    window.location = '/';
  };

  return (
    <div className={classes.root}>
      <p> Janusz Kowalski</p>
      <IconButton
        aria-haspopup="true"
        color="inherit"
        onClick={handleMenu}
        disableRipple
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        MenuListProps={{
          className: classes.menuList,
        }}
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={!!anchorEl}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={handleClose}
          className={classes.menuItem}
        >
          Profil
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          className={classes.menuItem}
        >
          Settings
        </MenuItem>
        <Divider component="li" />
        <MenuItem
          onClick={handleLogOut}
          className={classes.menuItem}
        >
          Wyloguj
        </MenuItem>
      </Menu>
    </div>
  );
}

export default UserAccount;
