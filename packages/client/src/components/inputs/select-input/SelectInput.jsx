/* eslint-disable react/jsx-props-no-spreading */
import { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Select, { components } from 'react-select';
import { FormControl, FormHelperText } from '@material-ui/core';
import { useField } from 'formik';
import { colors } from '@/theme/colors';

import CustomValueContainer from './CustomValueContainer';
import CustomSingleValue from './CustomSingleValue';

const useStyles = makeStyles({
  input: {
    height: '100%',
  },
});

const selectCustomStyles = {
  control: (provided) => ({
    ...provided,
    border: 0,
    paddingBottom: '7px',
    boxShadow: 'none',
    background: 'none',
    position: 'relative',
    width: '100%',
    height: '100%',
    cursor: 'pointer',

  }),
  input: (provided) => ({
    ...provided,
    margin: '0px',
    paddingBottom: '0px',
    paddingTop: '0px',
  }),
  option: (provided, {
    data, isDisabled, isSelected,
  }) => ({
    ...provided,
    backgroundColor: isSelected ? colors.mountainMeadow[600] : 'none',
    paddingTop: '8px',
    paddingBottom: '8px',
    ':hover': {
      ...provided[':hover'],
      backgroundColor: !isDisabled && (isSelected ? data.color : colors.mountainMeadow[300]),
      color: 'white',
    },
    ':active': {
      ...provided[':active'],
      backgroundColor: !isDisabled && (isSelected ? data.color : colors.mountainMeadow[600]),
      color: 'white',

    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0px',
    minHeight: '41px',
    cursor: 'pointer',
    label: {
      cursor: 'pointer',
    },
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    position: 'absolute',
    right: '0px',
    bottom: '0px',
  }),
  singleValue: (provided) => ({
    ...provided,
    padding: '0px',
    transform: 'none',
  }),
};

function SelectInput(props) {
  const {
    options, floatingLabel, isSearchable, className, label, ...restProps
  } = props;

  const [field, meta, helpers] = useField(restProps);
  const error = meta.error && meta.touched ? meta.error : '';

  const classes = useStyles();

  const handleChange = useCallback((option) => {
    helpers.setValue(option.value);
  }, [helpers]);

  const handleTouch = useCallback(() => helpers.setTouched(true), [helpers]);

  const currentValue = useMemo(() => options.find((option) => option.value === field.value) || '', [field.value, options]);

  const selectFieldInputClassName = clsx(`${classes.input} MuiInput-underline`, className, {
    'Mui-error': !!error,
  });

  return (
    <FormControl
      fullWidth
      error={!!error}
    >
      <Select
        inputId={`input-${field.name}`}
        className={selectFieldInputClassName}
        placeholder={label}
        aria-label={label}
        options={options}
        isSearchable={isSearchable}
        isError={!!error}
        components={{
          SingleValue: CustomSingleValue,
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
      <FormHelperText>
        {error}
      </FormHelperText>
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
