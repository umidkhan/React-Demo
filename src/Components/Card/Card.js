import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}>
        <div
          style={{
            border: "2px solid red",
            width: "404px",
            textAlign: "center",
            borderRadius: "20px",
            position: "relative",
            background: "indigo",
            color: "white"
          }}>
          <div
            style={{
              position: "absolute",
              left: "10px",
              top: "10px",
              background: "white",
              color: "black",
              width: "60px",
              height: "23px",
              fontSize: "20px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "15px",
              cursor: "pointer"
            }}>
            View
          </div>
          <img
            src={props.image}
            alt="jpg"
            style={{
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              width: "400px",
            }}
          />
          <h1>{props.name}</h1>
          <h4>{props.age}</h4>
        </div>
      </div>
    </>
  );
}
