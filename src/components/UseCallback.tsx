import { useState, memo, useCallback, useMemo } from 'react';

type buttonPrps = {
  onClick: () => void;
  label: string;
};

const expensiveCalculation = (num: number) => {
  console.log('Expensive calculation called');
  return num * 2; // Simulating an expensive calculation
};
export const Button = memo(({ onClick, label }: buttonPrps) => {
  console.log('Button rendered');
  return <button onClick={onClick}>{label}</button>;
});

export const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const [other, setOther] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  const incrementOther = useMemo(() => expensiveCalculation(other), [other]);

  return (
    <div>
      <h1>UseCallBack</h1>

      <Button onClick={increment} label={`Count: ${count}`} />
      <button onClick={() => setOtherCount((prev) => prev + 1)}>
        Other Count: {otherCount}
      </button>
      <button onClick={() => setOther((prev) => prev + 1)}>
        Other Count: {other}
      </button>
      <p>Count: {count}</p>
      <p>Other Count: {other}</p>
      <p>otherCount Value: {otherCount}</p>
    </div>
  );
};
