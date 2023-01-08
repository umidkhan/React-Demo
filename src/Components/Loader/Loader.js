import React, { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import "./Loader.css";

const override = {
  display: "block",
  borderColor: "red",
  alignItems: "center",
  textAlign: "center",
};

export default function Loader() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  let [color, setColor] = useState("#36d7b7");

  return (
    <>
      {loading ? (
        <BarLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={200}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        null
      )}

      {/* <div className="spinner"></div> */}
    </>
  );
}
