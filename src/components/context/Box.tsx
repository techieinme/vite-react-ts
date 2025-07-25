import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.primary.main,
        color: theme.primary.text,
        padding: '6rem',
        margin: '6rem',
      }}
    >
      <h1>Box component</h1>
    </div>
  );
};

export default Box;
