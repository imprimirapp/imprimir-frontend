import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#b4c935', contrastText: '#000000' },
  secondary: { main: '#29B6F6' },
  white: '#fff'
};
const themeName = 'Earls Green Dodger Blue Pacific Sardine';

export default createMuiTheme({ palette, themeName });