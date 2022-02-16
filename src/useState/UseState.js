import React, { useState } from "react";
import "./style.css";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  //increment and decrement function
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  //toggle function
  const toggleBtn = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>INC</button>
      <button onClick={decrement}>DEC</button>
      <button onClick={toggleBtn}>{toggle ? "ON" : "OFF"}</button>
    </div>
  );
};

export default UseState;
