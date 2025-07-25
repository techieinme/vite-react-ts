import { Children, createContext } from 'react';
import Theme from './Theme';
// create context
// create provider
//
export const ThemeContext = createContext(Theme);

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={Theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
