import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';

function CustomButton(props) {
  const {
    children, variant, type, ...rest
  } = props;
  return (
    <Button
      type={type}
      variant={variant}
      {...rest}
    >
      {children}
    </Button>
  );
}

CustomButton.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outlined', 'text', 'Link']),
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};
CustomButton.defaultProps = {
  variant: 'contained',
  type: 'button',
};

export default CustomButton;
