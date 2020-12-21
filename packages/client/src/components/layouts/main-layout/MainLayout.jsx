import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import Navbar from '@/components/layouts//navbar/Navbar';
import Sidebar from '@/components/layouts/sidebar/Sidebar';
import Footer from '@components/layouts/footer/Footer';
import { colors } from '@/theme/colors';

const useStyles = makeStyles({
  root: {
    height: '100%',
    paddingLeft: '220px',
    paddingTop: '64px',
    backgroundColor: colors.blueGrey[50],
    '&.mobile': {
      paddingLeft: '0',
    },
  },
  content: {
    minHeight: 'calc(100% - 64px)',
    padding: '20px',
    width: '100%',
  },
});

function MainLayout(props) {
  const { children } = props;

  const classes = useStyles();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const handleSidebarOpen = useCallback(() => setSidebarOpen(true), []);

  const handleSidebarClose = useCallback(() => setSidebarOpen(false), []);

  const isSidebarOpen = isDesktop ? true : sidebarOpen;

  const mainLayoutClassName = clsx(classes.root, {
    mobile: !isDesktop,
  });

  return (
    <main className={mainLayoutClassName}>
      <Navbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={isSidebarOpen}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        {children}
      </main>
      <Footer />
    </main>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
