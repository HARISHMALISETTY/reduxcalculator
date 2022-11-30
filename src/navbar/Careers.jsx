import React from "react";
import { useNavigate } from "react-router-dom";
const Careers = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Careers</h1>
      <button onClick={() => navigate(-1)}>PreviousPage(&lt;)</button>
      <button onClick={() => navigate("/Login")}>NextPage(&gt;)</button>
    </div>
  );
};
export default Careers;
