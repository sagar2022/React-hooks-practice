import React, { useReducer } from "react";
import "./style.css";

const initialState = 0;

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }

  return state;
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>{state}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INC</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DEC</button>
    </div>
  );
};

export default UseReducer;
