import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "setVal":
      return { count: action.payload.value };
    default:
      return state;
  }
}

const initialState = {
  count: 0,
};

const CounterReducer = () => {
  // Reset Input Field
  const [countReset, setCountReset] = useState();
  function handleChange(e) {
    e.preventDefault();
    setCountReset(Number(e.target.value));
  }

  // Reducer Functionality
  const [state, dispatch] = useReducer(reducer, initialState);

  function increment() {
    dispatch({ type: "increment" });
  }

  function decrement() {
    dispatch({ type: "decrement" });
  }

  function reset() {
    dispatch({ type: "reset" });
  }

  function setCountValue(value) {
    if (value === undefined) return;
    dispatch({ type: "setVal", payload: { value: value } });
  }

  return (
    <div className="counter-container">
      <h1 className="counter--heading">Reducer</h1>
      <div className="counter--inner">
        <button className="counter-btn" onClick={decrement}>
          -
        </button>
        <h2 className="counter-count">{state.count}</h2>
        <button className="counter-btn" onClick={increment}>
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
      <button className="btn btn--reset" onClick={reset}>
        Reset Count
      </button>
    </div>
  );
};
export default CounterReducer;
