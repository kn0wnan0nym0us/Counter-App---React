import { useState } from "react";

export default function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  function increaseCount() {
    setCount((count) => count + 1);
  }

  function decreaseCount() {
    setCount((count) => count - 1);
  }
  function resetCount() {
    setCount(0);
  }

  function setCountValue(value) {
    if (value === undefined) return;
    setCount(value);
  }

  return [count, increaseCount, decreaseCount, resetCount, setCountValue];
}
