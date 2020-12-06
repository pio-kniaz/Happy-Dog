import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
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

import './sidebar.scss';

function Sidebar(props) {
  const {
    open, variant, onClose,
  } = props;

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
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

  const sidebarPaperClassName = clsx('sidebar__paper', {
    'sidebar__paper--mobile': !isDesktop,
  });

  return (
    <span
      className="sidebar"
    >
      <Drawer
        anchor="left"
        classes={{ paper: sidebarPaperClassName }}
        onClose={onClose}
        open={open}
        variant={variant}
      >
        <div
          className="sidebar__content"
        >
          <List
          >
            {litItems.map(({
              title,
              to,
              icon,
            }) => (
              <NavLink
                to={`${to}`}
                key={title}
                className="sidebar__link"
                activeClassName="sidebar__link--active"
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
