import Box from './Box';
import ThemeContextProvider from './ThemeContext';

const DemoTheme = () => {
  return (
    <ThemeContextProvider>
      <Box />
    </ThemeContextProvider>
  );
};

export default DemoTheme;
