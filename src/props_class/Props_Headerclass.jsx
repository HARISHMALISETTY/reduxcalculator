import React from "react";
class Props_Headerclass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h1>Name:{this.props.name}</h1>
        <h1>Age:{this.props.age}</h1>
        <h1>Devoloper:{this.props.condition ? "yes" : "no"}</h1>
        <h1>Skils:{this.props.skils}</h1>
      </div>
    );
  }
}

export default Props_Headerclass;
