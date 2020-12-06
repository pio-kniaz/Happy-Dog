import PropTypes from 'prop-types';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { customizedButton } from './customizedButton';

function CustomButton(props) {
  const {
    children, variant, type, ...rest
  } = props;
  return (
    <ThemeProvider
      theme={(theme) => createMuiTheme({
        ...theme,
        components: {
          ...theme.components,
          ...customizedButton(theme),
        },
      })}
    >
      <Button
        type={type}
        variant={variant}
        component={variant === 'link' ? Link : 'button'}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {children}
      </Button>
    </ThemeProvider>
  );
}

CustomButton.propTypes = {
  variant(propValue, key, componentName, location, propFullName) {
    if (!['contained', 'outlined', 'text', 'link'].includes(propValue[key])) {
      return new Error(
        `Invalid prop ${propFullName} supplied to ${componentName}. expected one of ["contained","outlined","text","link"]`,
      );
    }
    if (propValue[key] === 'link' && typeof propValue.to !== 'string') {
      return new Error(
        `Invalid prop ${propFullName} supplied to ${componentName}. PropType to is required when variant link is selected`,
      );
    }
    return null;
  },
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};
CustomButton.defaultProps = {
  variant: 'contained',
  type: 'button',
};

export default CustomButton;
