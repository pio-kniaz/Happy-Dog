import PropTypes from 'prop-types';
import { useField } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

function TextInput({
  label, fullWidth, type, variant, ...restProps
}) {
  const [field, meta] = useField(restProps);
  const isError = meta.touched && meta.error;
  return (
    <FormControl fullWidth={fullWidth}>
      <TextField
        error={!!isError}
        id={`input-${field.name}`}
        label={label}
        type={type}
        variant={variant}
        helperText={!!isError && meta.error}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
      />
    </FormControl>
  );
}
TextInput.propTypes = {
  variant: PropTypes.oneOf(['filled', 'standard', 'outlined']),
  label: PropTypes.string,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
};
TextInput.defaultProps = {
  variant: 'standard',
  type: 'button',
  label: '',
  fullWidth: true,
};

export default TextInput;
