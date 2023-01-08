import React, { useState } from "react";

export default function Hooks() {
  const initiallCount = 0;
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Count {count}</h1>
      <div
        className="buttons"
        style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={() => setCount(initiallCount)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}
