/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import '@components/buttons/button-link/button-link.scss';
import { CustomButton } from '@components';

function ButtonLink(props) {
  const { className, to, ...restProps } = props;

  const buttonClassName = clsx(`btn-link ${className}`);
  return (
    <CustomButton
      className={buttonClassName}
      {...restProps}
      to="to"
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
