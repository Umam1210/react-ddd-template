import { useState } from 'react';

export const useCounter = (initialCount: number = 0) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(0);

  return { count, increment, decrement, reset };
};

