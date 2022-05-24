import PropTypes from "prop-types";
import Dog from "./Dog";
import "./DogList.css";

const DogList = (props) => {
  const getDogListJSX = (dogs) => {
    return dogs.map((dog) => {
      return (
        <Dog
          key={dog.id}
          id={dog.id}
          name={dog.name}
          breed={dog.breed}
          age={dog.age}
          chip={dog.chip}
        />
      );
    });
  };
  return <ul className="dogs__list no-bullet">{getDogListJSX(props.dogs)}</ul>;
};

DogList.propTypes = {
  dogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default DogList;
