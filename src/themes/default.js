import { createMuiTheme } from '@material-ui/core/styles';
const DEFAULT_PRIMARY_COLOR = '#FF6D00';
const DEFAULT_SECONDARY_COLOR = '#536DFE';
const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: DEFAULT_PRIMARY_COLOR,
    },
    secondary: {
      main: DEFAULT_SECONDARY_COLOR,
    },
  },
});

export default defaultTheme;
