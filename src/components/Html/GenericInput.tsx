import React from 'react';

type genericInputProps = React.ComponentProps<'input'> & {
  error?: string;
};
const GenericInput = ({
  name,
  error,
  value = '',
  ...rest
}: genericInputProps) => {
  return (
    <div>
      GenericInput
      <input {...rest} value={value} />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default GenericInput;
