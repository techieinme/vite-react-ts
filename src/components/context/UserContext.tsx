import React, { createContext, useContext, useState } from 'react';

type UserType = {
  name: string;
  email: string;
};

type UserContextType = {
  user: UserType | null;
  setUser: (user: UserType) => void;
};
// const UserContext = createContext<UserContextType | null>(null);
const UserContext = createContext({} as UserContextType);

type UserContextProviderType = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: UserContextProviderType) => {
  const [user, setUser] = useState<UserType | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error('user context not exits');
  }
  return userContext;
};
