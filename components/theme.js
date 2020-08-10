import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2b9ab5',
    },
    secondary: {
      main: '#eb2196',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#333639',
    },
  },
});

export default theme;