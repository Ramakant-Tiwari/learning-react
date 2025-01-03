import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./store";

export default function App() {
  const { counter } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <center style={{ marginTop: "10rem" }}>
      <h1>Counter</h1>
      <h3>Count: {counter}</h3>
      <button
        className="mx-4"
        onClick={() => dispatch(counterActions.increment())}
      >
        Increment
      </button>
      <button
        className="mx-4"
        onClick={() => dispatch(counterActions.decrement())}
      >
        Decrement
      </button>
    </center>
  );
}
