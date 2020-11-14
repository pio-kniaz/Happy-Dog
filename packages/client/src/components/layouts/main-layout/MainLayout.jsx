import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import './main-layout.scss';
import Navbar from '@/components/navbar/Navbar';
import Sidebar from '@/components/sidebar/Sidebar';
import Footer from '@components/footer/Footer';

function MainLayout(props) {
  const { children } = props;

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const handleSidebarOpen = useCallback(() => setSidebarOpen(true), []);

  const handleSidebarClose = useCallback(() => setSidebarOpen(false), []);

  const isSidebarOpen = isDesktop ? true : sidebarOpen;

  const mainLayoutClassName = clsx('main-layout', {
    'main-layout--mobile': !isDesktop,
  });

  return (
    <main className={mainLayoutClassName}>
      <Navbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={isSidebarOpen}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className="main-layout__content">
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
