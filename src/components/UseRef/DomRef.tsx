import { useEffect, useRef } from 'react';

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>DomRef</h1>

      <input type="text" ref={inputRef} />
    </div>
  );
};

export default DomRef;
