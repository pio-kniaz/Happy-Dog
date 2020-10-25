import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { palette } from '@/theme/palette';
import { typography } from '@/theme/typography';

const theme = createMuiTheme({
  palette,
  typography,
});

function Theme({ children }) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  );
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
