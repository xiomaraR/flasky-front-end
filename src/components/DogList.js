import React from "react";
import Dog from "./Dog";

const DogList = ({ dogs }) => {
  return (
    <ul>
      <h2>Dog count: 3</h2>
      {dogs.map((dog) => {
        return (
          <Dog
            name={dog.name}
            favToy={dog.favoriteToy}
            chipNum={dog.chipNumber}
          />
        );
      })}
    </ul>
  );
};

export default DogList;
