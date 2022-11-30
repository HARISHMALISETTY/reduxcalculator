import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <form
        style={{
          backgroundColor: "orangered",
          width: " 500px",
          marginLeft: "270px",
          marginTop: "20px",
        }}
      >
        <label
          style={{
            marginLeft: "60px",
            marginRight: "20px",
            fontSize: "160%",
            fontWeight: "bold",
          }}
        >
          username:
        </label>
        <input style={{ border: "none" }} type="text"></input>
        <br />
        <label
          style={{
            marginLeft: "60px",
            marginRight: "20px",
            fontSize: "160%",
            fontWeight: "bold",
          }}
        >
          password:
        </label>
        <input style={{ border: "none" }} type="text"></input>
        <br />
        <button
          style={{
            marginLeft: "300px",
            padding: "5px",
            cursor: "pointer",
            backgroundColor: "blueviolet",
          }}
          tye="submit"
          onClick={(event) => {
            event.preventDefault();
            navigate("/home");
          }}
        >
          submit
        </button>
        <br />
        <button onClick={() => navigate("/home")}>NextPage(&gt;)</button>
        <button onClick={() => navigate(-1)}>PreviousPage(&lt;)</button>
      </form>
    </div>
  );
};
export default Login;
