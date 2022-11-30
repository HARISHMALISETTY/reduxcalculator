import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate(-1)}>PreviousPage(&lt;)</button>
      <button onClick={() => navigate("/Aboutus")}>NextPage(&gt;)</button>
    </div>
  );
};
export default Home;
