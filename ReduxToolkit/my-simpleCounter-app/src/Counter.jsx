import React, { useDeferredValue } from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, reset } from "./counterSlice";

function Counter() {
  let count = useSelector((state) => state.counter.value);
  let dispatch = useDispatch();
  return (
    <>
        <h4>Simple Counter Using Redux Toolkit...</h4>
      <h3>Count : {count}</h3>
      <div id="btns">
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button disabled={count <= 0} onClick={() => dispatch(decrement())}>
          Decrease
        </button>
        <button disabled={count == 0} onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </>
  );
}
export default Counter;
