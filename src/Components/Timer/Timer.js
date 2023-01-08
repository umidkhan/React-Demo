import React, { useEffect, useState } from "react";

export default function Timer() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timer = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p
          style={{
            color: "white",
            fontSize: "13px",
            fontWeight: "600",
            fontFamily: "Open Sans",
          }}>
          {date.toDateString()}
        </p>
        <p
          style={{
            color: "white",
            fontSize: "13px",
            fontWeight: "600",
            fontFamily: "Open Sans",
          }}>
          {date.toLocaleTimeString()}
        </p>
      </div>
    </>
  );
}
