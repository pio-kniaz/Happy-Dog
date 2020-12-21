import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
});

function BasicLayout(props) {
  const { children } = props;
  const classes = useStyles();
  return (
    <main className={classes.root}>
      {children}
    </main>
  );
}

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
