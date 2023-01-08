import React from "react";
import Card from "../Card/Card";
import DevImg from "../Images/dev-photo.jpg";

export default function Section(props) {
  return (
    <div>
      <Card name="Jhon" age="16" image={DevImg} />
    </div>
  );
}
