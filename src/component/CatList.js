import Cat from "./Cat";
import React from "react";

const CatList = () => {
  return (
    <ul className="cat_list">
      <Cat></Cat>
      <Cat></Cat>
      <Cat></Cat>
    </ul>
  );
};

export default CatList;