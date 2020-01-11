import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

const App = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(randomcolor());

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCount(prevCount => prevCount + 1);
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // }, []);

  useEffect(() => {
    setColor(randomcolor());
    // if empty [], it means setColor only once when the comp mounts
  }, [count]);

  return (
    <div>
      <h1 style={{ color: color, margin: 30 }}>{count}</h1>
      <button onClick={increment}>Increment!</button>
      <button onClick={decrement}>Decrement!</button>
    </div>
  );
};

export default App;
