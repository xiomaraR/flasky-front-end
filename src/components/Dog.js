import PropTypes from "prop-types";
import "./Dog.css";

const Dog = (props) => {
  return (
    <li>
      <h2>
        {props.name}
        <button className="delete__dog">delete</button>
      </h2>

      {props.chip ? (
        <span>Chip #: {props.chip}</span>
      ) : (
        <button onClick={() => props.addChipCallback(props.id)}>
          add chip
        </button>
      )}
    </li>
  );
};

Dog.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  chip: PropTypes.string.isRequired,
  addChipCallback: PropTypes.func.isRequired,
};

export default Dog;
