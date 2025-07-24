import type React from 'react';

type buttonProps = {
  children?: React.ReactNode;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = ({ children, handleClick }: buttonProps) => {
  return (
    <button onClick={(event) => handleClick(event, 1)}>
      {children ? children : 'Button'}
    </button>
  );
};

export default Button;
