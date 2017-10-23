import { fade } from 'material-ui/utils/colorManipulator';

const forestGreen = '#08605F';
const deepPurple = '#372772';
const lavendarPurple = '#827191';
const niceBeige = 'papayawhip';
const niceViolet = 'palteviolet';

const navBarColor = lavendarPurple;
const accentColor = forestGreen;

export const colors = {
  forestGreen,
  deepPurple,
  lavendarPurple,
  niceBeige,
  niceViolet
};

export const colorRoles = {
  navBarColor,
  accentColor
};

export default {
  ...colors,
  ...colorRoles,
  colors,
  colorRoles
};
