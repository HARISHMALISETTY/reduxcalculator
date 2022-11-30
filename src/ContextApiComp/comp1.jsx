import React, { useContext } from "react";
import Comp2 from "./comp2";
import { messageContext } from "../App";

const Comp1 = () => {
  const value = useContext(messageContext);
  return (
    <div>
      <h1>USE CONTEXT COMPONENT</h1>
      <h1 style={{ backgroundColor: "lightblue", color: "red" }}>
        Name:{value.name}
      </h1>
      <Comp2 />
    </div>
  );
};

export default Comp1;
