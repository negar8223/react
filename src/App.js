import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";

function Counter() {
 
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log({ count });
  }, [count]);
  const increas = useCallback(() => {
    setCount((pre) => pre + 1);
  }, [count]);
  const decreas = useCallback(() => {
    setCount((pre) => pre - 1);
  });

  const reset = useCallback(() => {
    setCount(0);
  }, [count]);
  return (
    <>
      <h1>count : {count}</h1>

      <button onClick={decreas}>-</button>
      <button onClick={increas}>+</button>
      <button onClick={reset}>reset</button>
    </>
  );
}
export default Counter;
