import { useState } from 'react';
import { useSelector } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

import AuthService from '@/services/AuthService';
import { userBioSelector } from '@/redux/user-bio/selectors';

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
  accountButton: {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  fullName: {
    fontSize: '1rem',
    paddingRight: '0.35rem',
  },
}));

function UserAccount() {
  const [anchorEl, setAnchorEl] = useState(null);

  const { firstName, lastName } = useSelector(userBioSelector);

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
      <IconButton
        className={classes.accountButton}
        aria-haspopup="true"
        color="inherit"
        onClick={handleMenu}
        disableFocusRipple
        disableRipple
      >
        <p className={classes.fullName}>
          <strong>
            {`${firstName} ${lastName}`}
          </strong>
        </p>
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
