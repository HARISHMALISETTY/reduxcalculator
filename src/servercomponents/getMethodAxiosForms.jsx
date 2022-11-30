import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Button, Form } from "react-bootstrap";

const GetMethodAxiosJsonForms = () => {
  const [FirstName, setFirstName] = useState("");
  const [SecondName, setSecondName] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [DOB, setDOB] = useState("");
  const [EmailAddress, setEmailAddress] = useState("");
  const [Gender, setGender] = useState("");
  const [formsData, setFormsData] = useState([]);
  useEffect(() => {
    fetchAllFormsData();
  }, []);
  const fetchAllFormsData = () => {
    //get  data from the server and post in frontend
    try {
      axios
        .get(`http://localhost:3001/comments`)
        .then((response) => response.data)
        .then((data) => {
          setFormsData(data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const fetchFormsData = (limit) => {
    //get  data from the server and post in frontend
    try {
      axios
        .get(`http://localhost:3001/comments`, {
          params: {
            _limit: limit,
          },
        })
        .then((response) => response.data)
        .then((data) => {
          setFormsData(data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const addNewFormsData = (event) => {
    //add the data to server and post it into frontend
    event.preventDefault();
    try {
      let newData = {
        FirstName: FirstName,
        SecondName: FirstName,
        SecondName: SecondName,
        MobileNumber: MobileNumber,
        DOB: DOB,
        Gender: Gender,
        EmailAddress: EmailAddress,
      };

      axios.post(`http://localhost:3001/comments`, newData).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
    setFirstName("");
    setSecondName("");
    setMobileNumber("");
    setDOB("");
    setGender("");
    setEmailAddress("");
  };
  const patchFormsData = (id) => {
    //modifies the selected data
    try {
      let updateBody = { body: "React js-Redux" };
      axios
        .patch(`http://localhost:3001/comments/${id}`, updateBody)
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const putFormsData = (id) => {
    //removes the entire data and update with given data
    try {
      let updateFormsData = {
        body: "React js-Redux-Latest",
        postId: `harish-${id}`,
      };
      axios
        .put(`http://localhost:3001/comments/${id}`, updateFormsData)
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFormsData = (id) => {
    console.log(id);
    try {
      axios.delete(`http://localhost:3001/comments/${id}`).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Axios to get the data for JSON SERVER FORM DATA</h1>
      <Form
        onSubmit={addNewFormsData}
        style={{ width: "500px", marginLeft: "500px" }}
      >
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>Enter FirstName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter FirstName"
            value={FirstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSecondName">
          <Form.Label>SecondName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter SecondName"
            value={SecondName}
            onChange={(event) => {
              setSecondName(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMobileNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter MobileNumber"
            value={MobileNumber}
            onChange={(event) => {
              setMobileNumber(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDob">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="Date"
            value={DOB}
            onChange={(event) => {
              setDOB(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={EmailAddress}
            onChange={(event) => {
              setEmailAddress(event.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGender">
          <Form.Label style={{ marginRight: "10px" }}>Gender: </Form.Label>
          <input
            style={{ marginRight: "5px" }}
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={(event) => setGender(event.target.id)}
          />
          <span style={{ marginRight: "10px" }}>Male</span>
          <input
            style={{ marginRight: "5px" }}
            type="radio"
            name="gender"
            id="female"
            value="male"
            onChange={(event) => setGender(event.target.id)}
          />
          <span style={{ marginRight: "10px" }}>Female</span>
          <input
            style={{ marginRight: "5px" }}
            type="radio"
            name="gender"
            id="others"
            value="male"
            onChange={(event) => setGender(event.target.id)}
          />
          <span style={{ marginRight: "10px" }}>Others</span>
        </Form.Group>

        <Button
          onClick={addNewFormsData}
          style={{ backgroundColor: "grey", border: "none" }}
        >
          Add a new record
        </Button>
      </Form>
      <button
        onClick={fetchAllFormsData}
        style={{ backgroundColor: "grey", border: "none" }}
      >
        Get All Records
      </button>
      <button
        onClick={() => fetchFormsData(2)}
        style={{ backgroundColor: "grey", border: "none" }}
      >
        Get 2 Records
      </button>
      <button
        onClick={() => fetchFormsData(5)}
        style={{ backgroundColor: "grey", border: "none" }}
      >
        Get 5 Records
      </button>
      <br />

      <Table striped bordered hover variant="dark" cmd>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>SecondName</th>
            <th>MobileNumber</th>
            <th>DOB</th>
            <th>EmailAddress</th>
            <th>Gender</th>
            <th style={{ paddingLeft: "120px" }}>Operations</th>
          </tr>
        </thead>
        <tbody>
          {formsData.length > 0 ? (
            formsData.map((form) => (
              <tr>
                <td>{form.FirstName}</td>
                <td>{form.SecondName}</td>
                <td>{form.MobileNumber}</td>
                <td>{form.DOB}</td>
                <td>{form.EmailAddress}</td>
                <td>{form.Gender}</td>

                <td>
                  <button
                    onClick={() => {
                      patchFormsData(`${form.id}`);
                    }}
                  >
                    PatchUpdate
                  </button>
                  <button
                    onClick={() => {
                      putFormsData(`${form.id}`);
                    }}
                    style={{ marginLeft: "10px" }}
                  >
                    PutUpdate
                  </button>
                  <button
                    onClick={() => {
                      deleteFormsData(`${form.id}`);
                    }}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                <h1>No data found</h1>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};
export default GetMethodAxiosJsonForms;
