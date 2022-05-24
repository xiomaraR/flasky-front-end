import PropTypes from "prop-types";
import "./Dog.css";

const Dog = (props) => {
  return (
    <li>
      <span>props.name</span>
      <button>{props.chip === "" ? "add chip" : "Chip #: {props.chip}"}</button>
    </li>
  );
};

export default Dog;
