import React from "react";
import "../CssComponent/CssComponentExternal.css";
const ArrFunc = (props) => {
  return (
    <div>
      <center>
        <h1>using functional component</h1>
        <table>
          <tr>
            <th>S.No</th>
            <th>Name</th>
          </tr>

          {props.students.map((names, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{names}</td>
              </tr>
            );
          })}
        </table>
      </center>
    </div>
  );
};
export default ArrFunc;
