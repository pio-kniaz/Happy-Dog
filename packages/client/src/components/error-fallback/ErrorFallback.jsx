import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  headerTitle: {
    fontFamily: 'Kalam',
  },
}));

function ErrorFallback() {
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
        Something went wrong!
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        display="block"
        gutterBottom
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Voluptatibus eaque a suscipit ut asperiores pariatur
      </Typography>
    </div>
  );
}

export default ErrorFallback;
