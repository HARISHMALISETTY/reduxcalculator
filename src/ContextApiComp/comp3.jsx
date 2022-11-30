import React, { useContext } from "react";
import Comp4 from "./comp4";
import { messageContext } from "../App";

const Comp3 = () => {
  const value = useContext(messageContext);
  return (
    <div>
      <h1 style={{ backgroundColor: "grey", color: "white" }}>
        Role:{value.role}
      </h1>
      <Comp4 />
    </div>
  );
};

export default Comp3;
