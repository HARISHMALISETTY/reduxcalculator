import React, { useContext } from "react";
import { messageContext } from "../App";

const Comp4 = () => {
  const value = useContext(messageContext);
  return (
    <div>
      <h1 style={{ backgroundColor: "orange", color: "black" }}>
        Location:{value.loc}
      </h1>
    </div>
  );
};

export default Comp4;
