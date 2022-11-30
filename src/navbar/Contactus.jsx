import React from "react";
import { useNavigate } from "react-router-dom";
const ContactUs = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>ContactUs</h1>
      <button onClick={() => navigate(-1)}>PreviousPage(&lt;)</button>
      <button onClick={() => navigate("/Careers")}>NextPage(&gt;)</button>
    </div>
  );
};
export default ContactUs;
