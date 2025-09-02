import React from 'react';

type GenericButtonProps = {
  variant: 'primary' | 'secondary';
  children: string;
  // children:string //  AS  we need to restric button name as string instead of type REACT.reactNode
  //
} & Omit<React.ComponentProps<'button'>, 'children'>;

const GenericButton = ({
  children, // if we don't use ommit this still be react.reactNode and add type children:string into interface
  variant,
  className,
  ...rest
}: GenericButtonProps) => {
  return (
    <button className={`class-with-${variant} ${className}`} {...rest}>
      GenericButton
    </button>
  );
};

export default GenericButton;
