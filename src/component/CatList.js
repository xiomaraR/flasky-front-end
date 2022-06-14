import Cat from "./Cat";
import React from "react";

const CatList = () => {
  return (
    <ul className="cat_list">
      <h2>Cat Count: 3</h2>
      <Cat />
      <Cat />
      <Cat />
    </ul>
  );
};

export default CatList;