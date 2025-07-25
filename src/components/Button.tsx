import type React from 'react';

type buttonProps = {
  children?: React.ReactNode;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, handleClick, ...rest }: buttonProps) => {
  return (
    <button {...rest} onClick={(event) => handleClick(event, 1)}>
      {children ? children : 'Button'}
    </button>
  );
};

export default Button;
