import React from "react";
import "../CssComponent/CssComponentExternal.css";
class ArrClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>using Class component</h1>

        <ol style={{ display: "flex", justifyContent: "space-between" }}>
          {this.props.students.map((names, index) => {
            return (
              <li
                style={{
                  marginRight: "30px",
                  fontSize: "medium",
                  fontWeight: "bold",
                }}
                key={index}
              >
                {names}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
export default ArrClass;
