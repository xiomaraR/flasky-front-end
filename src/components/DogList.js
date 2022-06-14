import React from "react";
import Dog from "./Dog";

const DogList = () => {
  return (
    <ul>
      <h2>Dog count: 3</h2>
      <Dog></Dog>
      <Dog></Dog>
      <Dog></Dog>
    </ul>
  );
};

export default DogList;
