import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import Navbar from '@/components/layouts//navbar/Navbar';
import Sidebar from '@/components/layouts/sidebar/Sidebar';
import Footer from '@components/layouts/footer/Footer';
import { colors } from '@/theme/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    minHeight: '100%',
    paddingLeft: '220px',
    paddingTop: '64px',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '0',
    },
  },
  content: {
    backgroundColor: colors.blueGrey[50],
    minHeight: 'calc(100% - 80px)',
    width: '100%',
    padding: '30px 20px',
  },
  footer: {
    padding: '1rem',
    backgroundColor: colors.mountainMeadow[600],
    '& span': {
      color: colors.blueGrey[50],
    },
  },
}));

function MainLayout(props) {
  const { children } = props;

  const classes = useStyles();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const isSidebarOpen = isDesktop ? true : sidebarOpen;

  const handleSidebarOpen = useCallback(() => setSidebarOpen(true), []);

  const handleSidebarClose = useCallback(() => setSidebarOpen(false), []);

  return (
    <div className={classes.root}>
      <Navbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={isSidebarOpen}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        {children}
      </main>
      <Footer className={classes.footer} />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
