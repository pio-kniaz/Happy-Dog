import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  headerTitle: {
    fontFamily: 'Kalam',
  },
  description: {
    maxWidth: '650px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

function ErrorFallback({ title, description }) {
  const classes = useStyles();
  return (
    <div>
      <Typography
        className={classes.headerTitle}
        variant="h1"
        align="center"
        display="block"
        gutterBottom
      >
        {title}
      </Typography>
      <Typography
        className={classes.description}
        variant="subtitle1"
        align="center"
        display="block"
        gutterBottom
      >
        {description}
      </Typography>
    </div>
  );
}

ErrorFallback.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

ErrorFallback.defaultProps = {
  title: '',
  description: '',
};

export default ErrorFallback;
