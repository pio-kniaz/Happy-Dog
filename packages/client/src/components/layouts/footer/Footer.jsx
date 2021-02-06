import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';

function Footer(props) {
  const { className } = props;
  const footerClassName = clsx(className, 'footer');

  return (
    <footer
      className={footerClassName}
      data-testid="footer"
    >
      <Typography
        variant="caption"
        align="center"
        display="block"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Voluptatibus eaque a suscipit ut asperiores pariatur tempora accusamus fugit veritatis.
        Nemo omnis ipsum commodi quidem, magnam eveniet repudiandae error veritatis illum.
        !TODO: Dodac politykie cookies cos jak spotify
      </Typography>
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
