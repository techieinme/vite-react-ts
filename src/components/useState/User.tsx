import Button from '@components/Button';
import { useState } from 'react';

type authUser = {
  name: string;
  email: string;
};
const User = () => {
  const [user, setUser] = useState<authUser | null>(null);
  // const [user, setUser] = useState<authUser>({} as authUser);
  const handleLogin = () => {
    setUser({
      name: 'lakshmi',
      email: 'lakshmi@gmail.com',
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <Button handleClick={handleLogin}>Login</Button>
      <Button handleClick={handleLogout}>Login</Button>

      <h1>user name -{user?.name}</h1>
      <h1>user email -{user?.email}</h1>
      {/* <h1>user name -{user?.name}</h1>
      <h1>user email -{user?.email}</h1> */}
    </div>
  );
};

export default User;
