/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: () => ({
    display: 'flex',
    'justify-content': 'center',
    width: '100%',
    height: '100%',
    'align-items': 'center',
    color: 'red',
    // fontSize: !isSmall ? '34rem' : '1rem',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  }),
}));

const Loader = ({ isSmall, ...rest }) => {
  const classes = useStyles(isSmall);

  return (
    <div className={classes.root}>
      <CircularProgress {...rest} />
    </div>
  );
};

Loader.propTypes = {
  isSmall: PropTypes.bool,
};

Loader.defaultProps = {
  isSmall: true,
};

export default Loader;
