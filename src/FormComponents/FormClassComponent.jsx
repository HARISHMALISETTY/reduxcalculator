import React from "react";
import "../CssComponent/CssComponentExternal.css";

class FormClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      age: "",
      confirmPassword: "",
      date: "",
      month: "",
      year: "",
      gender: "",
      birthday: "",
      MastersCheckbox: false,
      BachelorsCheckbox: false,
      DiplomaCheckbox: false,
      myfile: "",
      presentAddress: "",
      diplomaPercentage: "40",
      bachelorsPercentage: "40",
      mastersPercentage: "40",
      url: "",
      favcolor: "",
    };
  }
  handleChange = (event) => {
    console.log(
      `Name:${event.target.name} checked:${event.target.checked} value:${event.target.value}${event.target.id}`
    );
    this.setState({
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value || event.target.id,
    });
  };
  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <h2>FORM USING CLASS COMPONENT</h2>
        <div className="Form">
          <div className="title">Sign Up</div>

          <center>
            <form onSubmit={this.handleSubmit}>
              <div className="inputs">
                <input
                  htmlFor="firstName"
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name..."
                  onChange={this.handleChange}
                  value={this.state.firstName}
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name..."
                  id="LastName"
                  onChange={this.handleChange}
                  value={this.state.lastName}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email..."
                  id="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
                <br />
                <label
                  style={{ marginRight: "100px", fontWeight: "bold" }}
                  htmlFor="presentAddress"
                >
                  PresentAddress:
                </label>
                <br />
                <textarea
                  style={{ width: "250px", height: "100px" }}
                  id="presentAddress"
                  name="presentAddress"
                  onChange={this.handleChange}
                  value={this.state.presentAddress}
                />
                <br />

                <input
                  type="text"
                  name="age"
                  placeholder="Age..."
                  value={this.state.age}
                  onChange={this.handleChange}
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password..."
                  id="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password..."
                  id="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                />
                <br />
              </div>

              <div className="dte">
                <label>
                  <b>Date of Birth</b>
                </label>
                <br />
                <select
                  name="date"
                  onChange={this.handleChange}
                  value={this.state.date}
                >
                  <option value=" ">Date</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                </select>
                <select
                  name="Month"
                  onChange={this.handleChange}
                  value={this.state.value}
                >
                  <option value=" ">Month</option>
                  <option value="jan">jan</option>
                  <option value="feb">feb</option>
                  <option value="mar">mar</option>
                  <option value="Apr">Apr</option>
                  <option value="May">May</option>
                  <option value="Jun">Jun</option>
                </select>
                <select
                  name="year"
                  onChange={this.handleChange}
                  value={this.state.value}
                >
                  <option value=" ">Year</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1997</option>
                  <option value="1997">1997</option>
                  <option value="1998">1998</option>
                </select>{" "}
              </div>
              <br />
              <label className="bday" htmlFor="birthday">
                Birthday:
              </label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                onChange={this.handleChange}
                value={this.state.value}
              />
              <br />
              <div className="gen">
                <label className="gender">
                  <b>Gender:</b>
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  onChange={this.handleChange}
                  value={this.state.id}
                />
                <span>male</span>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  onChange={this.handleChange}
                  value={this.state.id}
                />
                <span>female</span>
                <input
                  type="radio"
                  name="gender"
                  id="others"
                  onChange={this.handleChange}
                  value={this.state.id}
                />
                <span>others</span>
              </div>
              <br />
              <label className="ce">Choose Higher Education:</label>
              <div className="cb">
                <input
                  type="checkbox"
                  id="MastersCheckbox"
                  onChange={this.handleChange}
                  name="MastersCheckbox"
                  checked={this.state.MastersCheckbox}
                />
                <label htmlFor="HigherEducation"> Masters</label>
                <br />
                <input
                  type="checkbox"
                  id="BachelorsCheckbox"
                  onChange={this.handleChange}
                  name="BachelorsCheckbox"
                  checked={this.state.BachelorsCheckbox}
                />
                <label htmlFor="HigherEducation"> Bachelors</label>
                <br />
                <input
                  type="checkbox"
                  id="DiplomaCheckbox"
                  onChange={this.handleChange}
                  name="DiplomaCheckbox"
                  checked={this.state.DiplomaCheckbox}
                />
                <label htmlFor="HigherEducation"> Diploma</label>
                <br />
                <label htmlFor="diplomaPercentage">diplomaPercentage:</label>
                <input
                  type="range"
                  name="diplomaPercentage"
                  id="diplomaPercentage"
                  value={this.state.diplomaPercentage}
                  onChange={this.handleChange}
                />
                <br />
                <label htmlFor="bachelorsPercentage">
                  bachelorsPercentage:
                </label>
                <input
                  type="range"
                  name="bachelorsPercentage"
                  id="bachelorsPercentage"
                  value={this.state.bachelorsPercentage}
                  onChange={this.handleChange}
                />
                <br />
                <label htmlFor="bachelorsPercentage">mastersPercentage:</label>
                <input
                  type="range"
                  name="mastersPercentage"
                  id="mastersPercentage"
                  value={this.state.mastersPercentage}
                  onChange={this.handleChange}
                />
              </div>
              <label htmlFor="myfile">Select a file:</label>
              <input
                className="chh"
                type="file"
                id="myfile"
                name="myfile"
                onChange={this.handleChange}
                value={this.state.myfile}
              />
              <br />
              <label htmlFor="url">Enter url:</label>
              <input
                type="url"
                name="url"
                i="url"
                onChange={this.handleChange}
                value={this.state.url}
              ></input>
              <br />

              <br />
              <button id="bnn" onClick={this.handleSubmit}>
                submit
              </button>
            </form>
          </center>
        </div>
      </div>
    );
  }
}

export default FormClassComponent;
