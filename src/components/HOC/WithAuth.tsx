import type { JSX } from 'react';
import type React from 'react';

// const withAuth = (Component: React.ComponentType) => {
//   let isAuthenticated = false;
//   return function (props: any) {
//     if (isAuthenticated) {
//       return <Component {...props} />;
//     } else {
//       return 'please login ';
//     }
//   };
// };

export const withAuth = <T extends object>(
  Component: React.ComponentType<T>,
) => {
  return function EnhanceComponent(props: T): JSX.Element {
    return <Component {...props} />;
  };
};

export default withAuth;
