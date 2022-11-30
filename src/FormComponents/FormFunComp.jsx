import React, { useState } from "react";
import "../CssComponent/CssComponentExternal.css";
const FormFunComp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [MastersCheckbox, setMastersCheckbox] = useState(false);
  const [BachelorsCheckbox, setBachelorsCheckbox] = useState(false);
  const [DiplomaCheckbox, setDiplomaCheckbox] = useState(false);
  const [myfile, setMyfile] = useState("");
  const [diplomaPercentage, setDiplomaPercentage] = useState("40");
  const [bachelorsPercentage, setBachelorsPercentage] = useState("40");
  const [mastersPercentage, setMastersPercentage] = useState("40");
  const [url, setUrl] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      presentAddress,
      date,
      month,
      year,
      birthday,
      MastersCheckbox,
      BachelorsCheckbox,
      DiplomaCheckbox,
      myfile,
      diplomaPercentage,
      bachelorsPercentage,
      mastersPercentage,
      url
    );
  };

  return (
    <div>
      <h2>FORM USING FUNCTION COMPONENT</h2>
      <div className="Form">
        <div className="title">Sign Up</div>
        <center>
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <input
                htmlFor="firstName"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name..."
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name..."
                id="LastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />

              <input
                type="email"
                name="email"
                placeholder="Email..."
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
                value={presentAddress}
                onChange={(event) => setPresentAddress(event.target.value)}
              />
              <br />
              <input type="text" name="age" placeholder="Age..." />
            </div>
            <div className="dte">
              <label>
                <b>Date of Birth</b>
              </label>
              <br />
              <select
                name="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
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
                value={month}
                onChange={(event) => setMonth(event.target.value)}
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
                value={year}
                onChange={(event) => setYear(event.target.value)}
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
              value={birthday}
              onChange={(event) => setBirthday(event.target.value)}
            />
            <br />
            <div className="gen">
              <label className="gender" name="gender">
                <b>Gender:</b>
              </label>
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={(event) => setGender(event.target.id)}
              />
              <span>male</span>
              <input type="radio" name="gender" id="female" value="female" />
              <span>female</span>
              <input type="radio" name="gender" id="others" value="others" />
              <span>others</span>
            </div>
            <br />
            <label className="ce">Choose Higher Education:</label>
            <div className="cb">
              <input
                type="checkbox"
                id="MastersCheckbox"
                name="MastersCheckbox"
                checked={MastersCheckbox}
                onChange={(event) => setMastersCheckbox(event.target.value)}
              />
              <label htmlFor="HigherEducation"> Masters</label>
              <br />
              <input
                type="checkbox"
                id="BachelorsCheckbox"
                name="BachelorsCheckbox"
                checked={BachelorsCheckbox}
                onChange={(event) => setBachelorsCheckbox(event.target.value)}
              />
              <label htmlFor="HigherEducation"> Bachelors</label>
              <br />
              <input
                type="checkbox"
                id="DiplomaCheckbox"
                name="DiplomaCheckbox"
                checked={DiplomaCheckbox}
                onChange={(event) => setDiplomaCheckbox(event.target.value)}
              />
              <label htmlFor="HigherEducation"> Diploma</label>
              <br />
              <label htmlFor="diplomaPercentage">diplomaPercentage:</label>
              <input
                type="range"
                name="diplomaPercentage"
                id="diplomaPercentage"
                value={diplomaPercentage}
                onChange={(event) => setDiplomaPercentage(event.target.value)}
              />
              <br />
              <label htmlFor="bachelorsPercentage">bachelorsPercentage:</label>
              <input
                type="range"
                name="bachelorsPercentage"
                id="bachelorsPercentage"
                value={bachelorsPercentage}
                onChange={(event) => setBachelorsPercentage(event.target.value)}
              />
              <br />
              <label htmlFor="bachelorsPercentage">mastersPercentage:</label>
              <input
                type="range"
                name="mastersPercentage"
                id="mastersPercentage"
                value={mastersPercentage}
                onChange={(event) => setMastersPercentage(event.target.value)}
              />
            </div>
            <label htmlFor="myfile">Select a file:</label>
            <input
              className="chh"
              type="file"
              id="myfile"
              name="myfile"
              value={myfile}
              onChange={(event) => setMyfile(event.target.value)}
            />
            <br />
            <label htmlFor="url">Enter url:</label>
            <input
              type="url"
              name="url"
              i="url"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
            ></input>
            <br />
            {/* <label htmlFor="favcolor">Select your favorite color:</label>
            <input
              type="color"
              id="favcolor"
              value={favcolor}
              name="favcolor"
            ></input> */}

            <br />
            <button id="bnn" onClick={handleSubmit}>
              submit
            </button>
          </form>
        </center>
      </div>
    </div>
  );
};
export default FormFunComp;
