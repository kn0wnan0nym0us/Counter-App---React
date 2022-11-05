import { useState } from "react";
import useCounter from "../useCounter";

const Counter = () => {
  const [count, increaseCount, decreaseCount, resetCount, setCountValue] =
    useCounter(0);

  const [countReset, setCountReset] = useState();

  function handleChange(e) {
    const resetValue = Number(e.target.value);
    setCountReset(resetValue);
  }

  return (
    <div className="counter-container">
      <h1 className="counter--heading">Custom Hook</h1>
      <div className="counter--inner">
        <button className="counter-btn" onClick={decreaseCount}>
          -
        </button>
        <h2 className="counter-count">{count}</h2>
        <button className="counter-btn" onClick={increaseCount}>
          +
        </button>
      </div>
      <div className="counter-reset">
        <input
          type="number"
          value={countReset}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="button"
          onClick={() => setCountValue(countReset)}
          className="btn btn--set-count"
          value="Set Count Value"
        />
      </div>
      <button className="btn btn--reset" onClick={resetCount}>
        Reset Count
      </button>
    </div>
  );
};
export default Counter;
