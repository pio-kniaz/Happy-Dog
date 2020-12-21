/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { useMemo, useCallback } from 'react';
import Select, { components } from 'react-select';
import { useField, ErrorMessage } from 'formik';
import { CustomValueContainer } from '@/components/inputs/select-input/CustomValueContainer';
import { FormControl } from '@material-ui/core';
import clsx from 'clsx';

import './select-input.scss';

const selectCustomStyles = {
  control: (provided) => ({
    ...provided,
    border: 0,
    // This line disable the blue border
    boxShadow: 'none',
    background: 'none',
    position: 'absolute',
    width: '100%',
    height: '100%',
  }),
  input: (provided) => ({
    ...provided,
    margin: 0,
    paddingBottom: 0,
    paddingTop: 0,
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
    minHeight: 38,
  }),
  singleValue: (provided) => ({
    ...provided,
    padding: 0,
    transform: 'none',
  }),
};

function SelectInput(props) {
  const {
    options, floatingLabel, isSearchable, className, label, ...restProps
  } = props;
  const [field, meta, helpers] = useField(restProps);
  const errorText = meta.error && meta.touched ? meta.error : '';

  const handleChange = useCallback((option) => {
    helpers.setValue(option.value);
  }, [helpers]);

  const handleTouch = useCallback(() => helpers.setTouched(true), [helpers]);

  const currentValue = useMemo(() => options.find((option) => option.value === field.value) || '', [field.value, options]);

  const selectFieldInputClassName = clsx('select-field__input MuiInput-underline', className, {
    'floating-label': floatingLabel,
    'Mui-error': !!errorText,
  });

  return (
    <FormControl
      fullWidth
      className="select-field"
    >
      <Select
        // defaultMenuIsOpen
        className={selectFieldInputClassName}
        placeholder={label}
        options={options}
        isSearchable={isSearchable}
        components={{
          IndicatorSeparator: () => null,
          Placeholder: () => null,
          ValueContainer: floatingLabel
            ? CustomValueContainer
            : components.ValueContainer,
        }}
        {...restProps}
        name={field.name}
        value={currentValue}
        onChange={handleChange}
        onBlur={handleTouch}
        styles={selectCustomStyles}
      />
      <ErrorMessage
        name={field.name}
        component="p"
        render={(error) => <p className="MuiFormHelperText-root Mui-error">{error}</p>}
      />
    </FormControl>
  );
}

SelectInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  isSearchable: PropTypes.bool,
  floatingLabel: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
};

SelectInput.defaultProps = {
  isSearchable: false,
  floatingLabel: true,
  label: '',
  className: '',
};

export default SelectInput;
