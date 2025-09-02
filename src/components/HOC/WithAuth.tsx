const withAuth = (Component: React.ComponentType) => {
  let isAuthenticated = true;
  return function (props: any) {
    if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      return 'please login ';
    }
  };
};

export default withAuth;
