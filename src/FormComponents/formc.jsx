import React, { useState } from "react";
import "./CssForm.css";
const FormFuncComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [dateOfBirthLocal, setdateOfBirthLocal] = useState("");
  const [monthAndYear, setmonthAndYear] = useState("");
  const [gSearch, setGSearch] = useState("");
  const [selectFruit, setSelectFruit] = useState("bananas");
  const [time, setTime] = useState("");
  const [week, setWeek] = useState("");
  const [myfile, setMyFile] = useState("");
  const [gender, setGender] = useState("");
  const [English, setEnglish] = useState(false);
  const [Telugu, setTelugu] = useState(false);
  const [Tamil, setTamil] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [homepage, setHomePage] = useState("");
  const [points, setRange] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      password,
      homepage,
      myfile,
      dateOfBirth,
      dateOfBirthLocal,
      week,
      monthAndYear,
      time,
      gSearch,
      gender,
      English,
      Telugu,
      Tamil,
      quantity,
      selectFruit,
      points,
      phone
    );
  };
  return (
    <div>
      <h1>Form Class Component</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">FirstName:</label>
          <br />
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <br />
          <label htmlFor="lastName">LastName:</label>
          <br />
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <br />
          <label htmlFor="email">E-Mail:</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <br />
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)}
          />
          <br />
          <label htmlFor="dateOfBirthLocal">Date of Birth and Time:</label>
          <br />
          <input
            type="datetime-local"
            name="dateOfBirthLocal"
            value={dateOfBirthLocal}
            onChange={(event) => setdateOfBirthLocal(event.target.value)}
          />
          <br />
          <label htmlFor="monthAndYear">Month and Year:</label>
          <br />
          <input
            type="month"
            name="monthAndYear"
            id="monthAndYear"
            value={monthAndYear}
            onChange={(event) => setmonthAndYear(event.target.value)}
          />
          <br />
          <label htmlFor="gSearch">Google Search</label>
          <br />
          <input
            type="search"
            name="gSearch"
            id="gSearch"
            value={gSearch}
            onChange={(event) => setGSearch(event.target.value)}
          />
          <br />
          <label htmlFor="time">select time:</label>
          <br />
          <input
            type="time"
            name="time"
            id="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
          <br />
          <label htmlFor="week">Select a week:</label>
          <br />
          <input
            type="week"
            name="week"
            id="week"
            value={week}
            onChange={(event) => setWeek(event.target.value)}
          />
          <br />
          <label htmlFor="myfile">Select a file:</label>
          <br />
          <input
            type="file"
            id="myfile"
            name="myfile"
            value={myfile}
            onChange={(event) => setMyFile(event.target.value)}
          />
          <br />
          <label htmlFor="selectFruit">Select Fruit</label>
          <br />
          <select
            name="selectFruit"
            value={selectFruit}
            onChange={(event) => setSelectFruit(event.target.value)}
          >
            <option value="apples">Red Apples</option>
            <option value="oranges">Oranges</option>
            <option value="pineapple">PineApple</option>
            <option value="bananas">Bananas</option>
          </select>
          <br />
          <label>
            Gender:
            <input
              type="radio"
              id="male"
              name="gender"
              value={gender}
              onChange={(event) => setGender(event.target.id)}
            />
            Male
            <input
              type="radio"
              id="female"
              name="gender"
              value={gender}
              onChange={(event) => setGender(event.target.id)}
            />
            Female
            <input
              type="radio"
              id="Others"
              name="gender"
              value={gender}
              onChange={(event) => setGender(event.target.id)}
            />
            Others
          </label>
          <br />
          <label>
            Languages:
            <br />
            <input
              type="checkbox"
              id="English"
              name="English"
              checked={English}
              onChange={(event) => setEnglish(event.target.checked)}
            />
            <label htmlFor="English">English</label>
            <br />
            <input
              type="checkbox"
              id="Telugu"
              name="Telugu"
              checked={Telugu}
              onChange={(event) => setTelugu(event.target.checked)}
            />
            <label htmlFor="Telugu">Telugu</label>
            <br />
            <input
              type="checkbox"
              id="Tamil"
              name="Tamil"
              checked={Tamil}
              onChange={(event) => setTamil(event.target.checked)}
            />
            <label htmlFor="language">Tamil</label>
          </label>
          <br />
          <label htmlFor="quantity">Quantity (between 1 and 5):</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
          <br />
          <label htmlFor="homepage">Add your homepage:</label>
          <input
            type="url"
            id="homepage"
            name="homepage"
            value={homepage}
            onChange={(event) => setHomePage(event.target.value)}
          />
          <br />
          <label htmlFor="points">Points (between 0 and 100):</label>
          <input
            type="range"
            id="points"
            name="points"
            value={points}
            onChange={(event) => setRange(event.target.value)}
          />
          <br />
          <label htmlFor="phone">Enter your phone number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
export default FormFuncComponent;
