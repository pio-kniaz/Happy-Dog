import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, useMediaQuery } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';

import { colors } from '@/theme/colors';

const useStyles = makeStyles({
  root: {},
  paper: {
    marginTop: '65px',
    backgroundColor: colors.blueGrey[50],
    width: '220px',
    height: '100%',
    '&.mobile': {
      marginTop: '0',
    },
  },
  link: {
    textDecoration: 'none',
    height: '100%',
    width: '100%',
    display: 'block',
  },
  linkActive: {
    textDecoration: 'none',
    height: '100%',
    width: '100%',
    display: 'block',
    '& svg': {
      transform: 'scale(1.1)',
      fill: colors.mountainMeadow[600],
    },
  },
});

function Sidebar(props) {
  const {
    open, variant, onClose,
  } = props;

  const classes = useStyles();

  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const litItems = [
    {
      title: 'Dashboard',
      to: '/',
      icon: <DashboardIcon />,
    },
    {
      title: 'Dogs',
      to: '/dogs',
      icon: <PeopleIcon />,
    },
    {
      title: 'Account',
      to: '/account',
      icon: <AccountBoxIcon />,
    },
    {
      title: 'Settings',
      to: '/settings',
      icon: <SettingsIcon />,
    },
  ];

  const sidebarPaperClassName = clsx(classes.paper, {
    mobile: !isDesktop,
  });

  return (
    <span>
      <Drawer
        anchor="left"
        classes={{ paper: sidebarPaperClassName }}
        onClose={onClose}
        open={open}
        variant={variant}
      >
        <div>
          <List>
            {litItems.map(({
              title,
              to,
              icon,
            }) => (
              <NavLink
                to={`${to}`}
                key={title}
                className={classes.link}
                activeClassName={classes.linkActive}
              >
                <ListItem
                  button
                >
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItem>
              </NavLink>
            ))}
          </List>

        </div>
      </Drawer>
    </span>
  );
}

Sidebar.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
