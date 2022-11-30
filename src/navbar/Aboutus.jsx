import React from "react";
import { useNavigate } from "react-router-dom";
const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>AboutUs</h1>
      <button onClick={() => navigate(-1)}>PreviousPage(&lt;)</button>
      <button onClick={() => navigate("/ContactUs")}>NextPage(&gt;)</button>
    </div>
  );
};
export default AboutUs;
