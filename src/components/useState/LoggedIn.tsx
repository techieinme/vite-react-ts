import Button from '@components/Button';
import { useState } from 'react';
const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      {/* <Button handleClick={() => setIsLoggedIn(true)}>click Login</Button>
      <Button handleClick={() => setIsLoggedIn(false)}>click Login</Button> */}
      <Button handleClick={handleLogin}>click Login</Button>
      <Button handleClick={handleLogout}>click Login</Button>

      {isLoggedIn ? 'you are loggedin' : 'you are loggedout'}
    </div>
  );
};

export default LoggedIn;
