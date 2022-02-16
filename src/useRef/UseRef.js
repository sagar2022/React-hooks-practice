import React, { useRef, useState } from "react";
import "./style.css";

const UseRef = () => {
  //useRef is like useState which store data but it doesn't re-render the page;
  const luckyName = useRef(null);
  const [show, setShow] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const userName = luckyName.current.value;
    userName === "" ? alert("please put your name") : setShow(true);
  };

  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <label htmlFor="luckyName">Enter Your Name</label>
        <input type="text" id="luckyName" ref={luckyName} />
        <button>Submit</button>
      </form>
      <p>{show ? `Your LuckyName is ${luckyName.current.value}` : ""}</p>
    </div>
  );
};

export default UseRef;
