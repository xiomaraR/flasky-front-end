import React from "react";

const Dog = ({ name, favToy, chipNum }) => {
  return (
    <li>
      <h3>{name}</h3>
      <span>Favorite Toy: {favToy}</span>
      <span>Chip #: {chipNum}</span>
      <button>add chip</button>
    </li>
  );
};

export default Dog;
