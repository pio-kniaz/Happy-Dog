import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Hidden, IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import PetsIcon from '@material-ui/icons/Pets';

import { UserAccount } from '@components/layouts/navbar/components';
import { ButtonLink } from '@components';
import { colors } from '@/theme/colors';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: colors.mountainMeadow[600],
  },
  grow: {
    flexGrow: 1,
  },
  left: {},
  right: {
    flexGrow: '1',
    textAlign: 'right',
  },
}));

function Navbar(props) {
  const { onSidebarOpen } = props;

  const classes = useStyles();

  return (
    <AppBar
      data-testid="navbar"
      className={classes.root}
    >
      <Toolbar>
        <div className={classes.left}>
          <Hidden mdDown>
            <ButtonLink
              aria-label="Redirect to main page"
              color="primary"
              to="/"
            >
              <IconButton>
                <PetsIcon />
              </IconButton>
            </ButtonLink>
          </Hidden>
          <Hidden lgUp>
            <IconButton
              aria-label="Toggle sidebar"
              color="inherit"
              onClick={onSidebarOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </div>
        <div className={classes.grow} />
        <div className={classes.right}>
          <UserAccount />
        </div>
      </Toolbar>
    </AppBar>
  );
}

Navbar.propTypes = {
  onSidebarOpen: PropTypes.func.isRequired,
};

export default Navbar;
