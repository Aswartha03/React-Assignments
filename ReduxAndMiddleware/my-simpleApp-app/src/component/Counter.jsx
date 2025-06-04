import React from "react";

import {
  increment,
  decrement,
  asyncIncrement,
  asyncDecrement,
} from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  let count = useSelector((state) => state.count);
  let dispatch = useDispatch();
  return (
    <>
      <h3>Present Count : {count}</h3>
      <div id="buttons">
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button disabled={count <= 0} onClick={() => dispatch(decrement())}>
          Decrease
        </button>
        <button onClick={() => dispatch(asyncIncrement())}>
          Increase After 1.5s
        </button>
        <button
          disabled={count <= 0}
          onClick={() => dispatch(asyncDecrement())}
        >
          Decrease After 2s
        </button>
      </div>
    </>
  );
}
export { Counter };
