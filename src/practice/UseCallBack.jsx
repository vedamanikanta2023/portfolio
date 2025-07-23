import * as React from "react"
import { useState } from "react";
import { decrement, increment } from "../counterSlice";
import { useDispatch } from "react-redux";

export const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");


  const handleClick = React.useCallback(() => {
    setValue("Kunal");
  },[]);
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <p>Value: {value}</p>
      <SlowComponent handleClick={handleClick} />
    </div>
  );
};

const SlowComponent = React.memo(({ handleClick, value }) => {
console.log("calling slow comp")
  const dispatch = useDispatch()

  // Intentially making the component slow
  for (let i = 0; i < 1000000000; i++) {}

  return (
    <div>
      <h1>Slow Component</h1>
      <button onClick={handleClick}>Click Me</button>
<div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        {/* <span>{count}</span> */}
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
});