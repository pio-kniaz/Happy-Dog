import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';
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

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    marginTop: '75px',
    backgroundColor: colors.blueGrey[50],
    width: '220px',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      marginTop: '0px',
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
}));

function Sidebar(props) {
  const {
    open, variant, onClose,
  } = props;

  const classes = useStyles();

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

  return (
    <span>
      <Drawer
        anchor="left"
        classes={{ paper: classes.paper }}
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
