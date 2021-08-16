import { theme, extendTheme } from '@chakra-ui/react';

const fonts = {
  ...theme.fonts,
};
const colors = {
  ...theme.colors,
};

const components = {};

const customTheme = extendTheme({
  fonts,
  colors,
  components,
});

export default customTheme;
