import { useField, ErrorMessage } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';

function TextInput({
  label, type, fullWidth, ...restProps
}) {
  const [field, meta, helpers] = useField(restProps);
  const isError = meta.touched && meta.error;
  return (
    <FormControl fullWidth={fullWidth}>
      <TextField
        fullWidth={fullWidth}
        error={!!isError}
        id={`input-${field.name}`}
        label="Standard"
        type={type}
        {...field}
      />
      <ErrorMessage
        component="div"
        render={(msg) => <Alert severity="error">{msg}</Alert>}
        name={field.name}
      />
    </FormControl>
  );
}

export default TextInput;
