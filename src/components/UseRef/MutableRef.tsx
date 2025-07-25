import { useEffect, useRef, useState } from 'react';

const MutableRef = () => {
  const [timer, setTimer] = useState<number>(0);

  const intervalRef = useRef<number | undefined>(null);

  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    });
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      MutableRef
      {timer}
      <button onClick={() => stopTimer()}>stopTimer</button>
    </div>
  );
};

export default MutableRef;
