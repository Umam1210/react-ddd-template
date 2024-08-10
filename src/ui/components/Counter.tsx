import { useCounter } from "../hooks/useCounter";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="card">
      <p>Count is: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
