import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@/theme/colors';

import Footer from '@components/layouts/footer/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    minHeight: '100%',
  },
  main: {
    minHeight: '100%',
    backgroundColor: colors.blueGrey[50],
    paddingBottom: '110px',
  },
  footer: {
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '2rem',
    backgroundColor: colors.mountainMeadow[600],
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
    },
    '& span': {
      color: colors.blueGrey[50],
    },
  },
}));

function BasicLayout(props) {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.main}>
        {children}
      </main>
      <Footer className={classes.footer} />
    </div>
  );
}

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
