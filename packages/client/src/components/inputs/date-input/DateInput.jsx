import {
  useState, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import FormControl from '@material-ui/core/FormControl';
import { IconButton } from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles({
  input: {
    cursor: 'pointer',
  },
  iconButton: {
    paddingBottom: '8px',
    paddingTop: '0',
    '&:focus, &:hover, &:active': {
      backgroundColor: 'transparent',
    },
  },
});

function DateInput(props) {
  const { label, onClose, ...restProps } = props;

  const [field, meta, helpers] = useField(restProps);
  const errorText = meta.error && meta.touched ? meta.error : '';

  const classes = useStyles();

  const [date, setDate] = useState(field.value || null);

  const handleDateChange = useCallback((value) => {
    if (value && value.isValid()) {
      const newValue = moment(value).format('YYYY-MM-DD');
      setDate(newValue);
    } else {
      setDate(null);
    }
  }, []);

  const handleOnClose = useCallback(() => {
    onClose();
    helpers.setTouched(true);
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
          onClose={handleOnClose}
          value={field.value}
          onChange={handleDateChange}
          animateYearScrolling
          InputProps={{
            endAdornment: (
              <IconButton
                className={classes.iconButton}
                disableRipple
              >
                <EventIcon />
              </IconButton>
            ),
          }}
          InputLabelProps={{
            shrink: !!(meta.touched && typeof field.value === 'string'),
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
