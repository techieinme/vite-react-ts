import React, { useState } from 'react';

type CounterProps = {
  initialValue?: number;
};

const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  // ❌ Mistake 1: unused variable
  const unusedVar = 'I am never used';

  // ❌ Mistake 2: using "any" type
  const [count, setCount] = useState<any>(initialValue);

  // ❌ Mistake 3: inline function inside render (inefficient in some cases)
  const reset = () => setCount(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="p-4 border rounded-xl shadow-sm max-w-xs text-center">
      <h2 className="text-xl font-bold mb-2">Counter Demo</h2>
      <p className="text-lg mb-4">Value: {count}</p>
      <div className="space-x-2">
        {/* ❌ Mistake 4: inline arrow function instead of handler */}
        <button
          onClick={() => setCount(count + 10)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Add 10
        </button>

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

        {/* ❌ Mistake 5: unused reset button (extra UI) */}
        <button className="px-4 py-2 bg-gray-500 text-white rounded-lg">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
