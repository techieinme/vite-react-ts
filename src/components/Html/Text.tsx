import React from 'react';

type textProps = {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  as?: React.ElementType;
};
const Text = ({ as, size, color }: textProps) => {
  const Component = as || 'div';

  return (
    <Component className={`className-with-${size}-${color}`}>Text</Component>
  );
};

export default Text;
