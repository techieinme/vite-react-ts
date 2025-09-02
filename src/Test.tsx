import { createContext, useCallback, useContext, useState } from 'react';

type user = {
  name: string;
  email: string;
  isLoggedIn: boolean;
};
type userConexType = {
  user: user | null;
  setUser: (user: user | null) => void;
  login: () => void;
  logout: () => void;
};

const UserContext = createContext<userConexType | null>(null);

type userContextProvideType = {
  children: React.ReactNode;
};

export const UserContextProvider = ({ children }: userContextProvideType) => {
  const [user, setUser] = useState<user | null>(null);

  const login = useCallback(() => {
    setUser({
      name: 'Lakshmikanth',
      email: 'lakshmikanth@example.com',
      isLoggedIn: true,
    });
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error('useUser must be used within a UserContextProvider');
  }
  return userContext;
};
