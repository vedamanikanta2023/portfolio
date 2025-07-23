import { useMemo, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

function calculate() {
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  return result;
}

export function UseMemo() {
  const [count, setCount] = useState(0);
  const reduxCount = useSelector((state) => state.counter.value)

  const value = useMemo(()=>calculate(),[]);

  return (
    <div className="App">
        <h1>Redux Count=={reduxCount}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
    </div>
  );
}