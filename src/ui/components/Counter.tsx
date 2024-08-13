import { decrement, increment, incrementByAmount, reset } from "../../infrastructure/redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../infrastructure/redux/app/hook";

export default function Counter() {
  const count = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  return (
    <div className="card">
      <p>Count is: {count?.value}</p>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>+ 2</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}
