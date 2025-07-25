import { createContext, useContext, useState } from 'react';

type user = {
  name: string;
  email: string;
};

type userContextType = {
  user: user | null;
  setUser: (user: user) => void;
};
const UserContext = createContext<userContextType | null>(null);

type UserContextProviderType = {
  children: React.ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderType) => {
  const [user, setUser] = useState<user | null>(null);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const userC = useContext(UserContext);
  if (!userC) {
    throw new Error('error ');
  }
  return userC;
};
