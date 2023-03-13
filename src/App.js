import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, currentCount } from "./reduxCrap/counterSlice";

function App() {
  const count = useSelector(currentCount);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <span>{count}</span>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  );
}

export default App;
