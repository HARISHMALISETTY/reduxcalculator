import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "../navbar/Home";
import Careers from "../navbar/Careers";
import ContactUs from "../navbar/Contactus";
import AboutUs from "../navbar/Aboutus";
import Login from "../navbar/Login";

const RouterComp = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <BrowserRouter>
          <div className="flexLink container-fluid">
            <img
              src="https://cdn-images-1.medium.com/max/396/1*xdhm7cqz8DwDzQNXxhZXVA@2x.png"
              height="85%"
            />
            <Link className="ln" to="/Home">
              Home
            </Link>
            <Link className="ln" to="/AboutUs">
              AboutUs
            </Link>
            <Link className="ln" to="/ContactUs">
              ContactUs
            </Link>
            <Link className="ln" to="/Careers">
              Careers
            </Link>
            <Link className="ln" to="/Login">
              Login
            </Link>
            <Link className="ln" to="/signup">
              Signup
            </Link>
          </div>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Careers" element={<Careers />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </nav>
    </div>
  );
};
export default RouterComp;
