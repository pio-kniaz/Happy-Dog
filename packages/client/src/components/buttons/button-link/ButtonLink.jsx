/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { colors } from '@/theme/colors';
import CustomButton from '@components/buttons/custom-button/CustomButton';

const useStyles = makeStyles({
  root: {
    color: colors.mountainMeadow[600],
    background: 'transparent',
    border: 0,
    boxShadow: 'none',
    '&:focus, &:hover, &:active': {
      background: 'transparent',
      boxShadow: 'none',
      textDecoration: 'underline',
    },
  },
});

function ButtonLink(props) {
  const { className, to, ...restProps } = props;

  const classes = useStyles();

  const buttonLinkClassName = clsx(classes.root, className);

  return (
    <CustomButton
      className={buttonLinkClassName}
      {...restProps}
      to={to}
      component={Link}
    />
  );
}

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ButtonLink.defaultProps = {
  className: '',
};

export default ButtonLink;
