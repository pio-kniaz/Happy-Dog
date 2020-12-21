import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import FormControl from '@material-ui/core/FormControl';
import { IconButton } from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';

function DateInput(props) {
  const { label, onClose, ...restProps } = props;
  const [field, meta, helpers] = useField(restProps);
  const errorText = meta.error && meta.touched ? meta.error : '';

  const [date, setDate] = useState(field.value || null);

  const handleDateChange = useCallback((value) => {
    if (value && value.isValid()) {
      const newValue = moment(value).format('YYYY-MM-DD');
      setDate(newValue);
    } else {
      setDate(null);
    }
  }, []);

  const handleOnCLose = useCallback(() => {
    helpers.setTouched(true);
    onClose();
  }, [helpers, onClose]);

  useEffect(() => {
    helpers.setValue(date);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <FormControl fullWidth>
        <DatePicker
          format="DD-MM-YYYY"
          label={label}
          error={!!errorText}
          helperText={errorText}
          name={field.name}
          onClose={handleOnCLose}
          value={field.value}
          onChange={handleDateChange}
          animateYearScrolling
          InputProps={{
            endAdornment: (
              <IconButton>
                <EventIcon />
              </IconButton>
            ),
          }}
          {...restProps}
        />
      </FormControl>
    </MuiPickersUtilsProvider>
  );
}

DateInput.propTypes = {
  label: PropTypes.string,
  onClose: PropTypes.func,
};

DateInput.defaultProps = {
  label: '',
  onClose: () => null,
};

export default DateInput;
