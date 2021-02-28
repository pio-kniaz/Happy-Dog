import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles(() => ({
  copy: {
    fontSize: '0.95rem',
    fontWeight: 'bold',
  },
}));

function Footer(props) {
  const { className } = props;
  const classes = useStyles();

  return (
    <footer
      data-testid="footer"
      className={className}
    >
      <Grid
        container
        justify="space-between"
        alignItems="center"
      >
        <Typography
          className={classes.copy}
          variant="caption"
          align="center"
          display="block"
        >
          &copy; 2021 Happy Dog
        </Typography>
        <div>
          <IconButton>
            <InstagramIcon data-testid="instagram-icon" />
          </IconButton>
          <IconButton>
            <FacebookIcon data-testid="facebook-icon" />
          </IconButton>
        </div>
      </Grid>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
