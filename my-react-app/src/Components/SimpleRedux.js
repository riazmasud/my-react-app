import React, { Component } from "react";
import { connect } from "react-redux";

class SimpleRedux extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          Age:
          <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispachToProps = dispach => {
  return {
    onAgeUp: () => dispach({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispach({ type: "AGE_DOWN", value: 1 })
  };
};

export default connect(mapStateToProps, mapDispachToProps)(SimpleRedux);
