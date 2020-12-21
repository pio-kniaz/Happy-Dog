import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

function CustomButton(props) {
  const {
    className,
    children, variant, type, ...rest
  } = props;

  return (
    <Button
      className={className}
      type={type}
      variant={variant}
        // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </Button>
  );
}

CustomButton.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};
CustomButton.defaultProps = {
  className: '',
  variant: 'contained',
  type: 'button',
};

export default CustomButton;
