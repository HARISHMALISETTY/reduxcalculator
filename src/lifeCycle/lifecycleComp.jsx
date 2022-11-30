import React from "react";

class LifeCycleComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  static getDerivedStateFromProps(state, props) {
    return { counter: props.counter };
  }
  componentDidMount() {
    document.title = `counter${this.state.counter}`;
  }
  shouldComponentUpdate() {
    return true;
  }
  componentDidUpdate() {
    document.title = `counter${this.state.counter}`;
  }
  render() {
    return (
      <div>
        <h1>ReactLifeCycle-ClassComponent</h1>
        <button
          style={{ marginLeft: "690px", width: "100px" }}
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
        <span>
          <h2>{this.state.counter}</h2>
        </span>
        <button
          style={{ marginLeft: "690px", width: "100px" }}
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
      </div>
    );
  }
}
export default LifeCycleComp;
