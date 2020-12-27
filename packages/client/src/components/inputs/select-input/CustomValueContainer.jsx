/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { components } from 'react-select';

function CustomValueContainer(props) {
  const {
    children, hasValue, selectProps: { menuIsOpen, placeholder, isError },
  } = props;
  const shouldFloatLabel = menuIsOpen || hasValue;

  const selectFieldLabelClassName = clsx('MuiFormLabel-root MuiInputLabel-formControl MuiInputLabel-animated', {
    'MuiInputLabel-shrink': shouldFloatLabel,
    'active Mui-focused': menuIsOpen,
    active: hasValue,
    'Mui-error': isError,
  });

  return (
    <components.ValueContainer {...props}>
      <label className={selectFieldLabelClassName}>
        {placeholder}
      </label>
      {children}
    </components.ValueContainer>
  );
}

CustomValueContainer.propTypes = {
  selectProps: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  hasValue: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomValueContainer;
