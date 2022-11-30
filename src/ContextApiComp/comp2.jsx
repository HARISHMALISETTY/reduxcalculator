import React, { useContext } from "react";
import Comp3 from "./comp3";
import { messageContext } from "../App";

const Comp2 = () => {
  const value = useContext(messageContext);
  return (
    <div>
      <h1 style={{ backgroundColor: "yellowgreen", color: "blue" }}>
        Age:{value.age}
      </h1>

      <Comp3 />
    </div>
  );
};

export default Comp2;
