import React from "react";
import PropTypes from "prop-types";

const Props_HeaderFunc = ({ name, age, condition, skils }) => {
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Age:{age}</h1>
      <h1>Devoloper:{condition ? "yes" : "no"}</h1>
      <h1>Skils:{skils}</h1>
    </div>
  );
};
export default Props_HeaderFunc;

Props_HeaderFunc.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  condition: PropTypes.bool,
  skils: PropTypes.array,
};
