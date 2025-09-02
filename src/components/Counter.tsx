import React, { useState } from 'react';

type CounterProps = {
  initialValue?: number;
};

const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="p-4 border rounded-xl shadow-sm max-w-xs text-center">
      <h2 className="text-xl font-bold mb-2">Counter Demo</h2>
      <p className="text-lg mb-4">Value: {count}</p>
      <div className="space-x-2">
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
