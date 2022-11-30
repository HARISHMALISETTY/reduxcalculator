import React from "react";
import "./CounterRedux.css";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {
  increment,
  decrement,
  nameChange,
  multiple,
  colorChange,
  fetchData,
} from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
const CounterRedux = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer.counter);
  const newName = useSelector((state) => state.nameReducer.name);
  const newColor = useSelector((state) => state.nameReducer.color);
  const commentCount = useSelector((data) => data.dataReducer.Comments);

  return (
    <div className="Counter_header">
      <h1
        style={{ color: `${newColor}` }}
        onDoubleClick={() => dispatch(colorChange("orange"))}
        onClick={() => dispatch(nameChange("newCounter"))}
      >
        {newName}
      </h1>
      <Button variant="success" onClick={() => dispatch(increment(2))}>
        <h5>Increment(+)</h5>
      </Button>
      <h2>{counter}</h2>
      <Button variant="danger" onClick={() => dispatch(decrement(1))}>
        <h5> Decrement(-)</h5>
      </Button>
      <Button variant="warning" onClick={() => dispatch(multiple(2))}>
        <h5>Multiply with 2</h5>
      </Button>
      <h1>current data count:{commentCount.length}</h1>

      <Button variant="info" onClick={() => dispatch(fetchData())}>
        <h5>Data Count</h5>
      </Button>
      <br />
      <Table striped bordered hover variant="dark" cmd>
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>SecondName</th>
            <th>MobileNumber</th>
            <th>DOB</th>
            <th>EmailAddress</th>
            <th>Gender</th>
          </tr>
        </thead>

        {commentCount.map((data) => (
          <tbody>
            <tr
              key={data.id}
              style={{
                color: "black",
                backgroundColor: "lightgrey",
                fontFamily: "verdana",
              }}
            >
              <td>{data.id}</td>
              <td>{data.FirstName}</td>
              <td>{data.SecondName}</td>
              <td>{data.MobileNumber}</td>
              <td>{data.DOB}</td>
              <td>{data.EmailAddress}</td>
              <td>{data.Gender}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};
export default CounterRedux;
