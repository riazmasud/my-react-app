import React, { Component } from "react";
import { connect } from "react-redux";

class MultipleReducers extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="col">
          <div>
            <span>A: </span>
            {this.props.a}
          </div>
          <button onClick={this.props.updateA}>Update A</button>
        </div>
        <div className="col">
          <div>
            <span>B:</span>
            {this.props.b}
          </div>
          <button onClick={this.props.updateB}>Update B</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    a: state.a,
    b: state.b
  };
};

const mapDispachToProps = dispach => {
  return {
    updateA: () => dispach({ type: "UPDATE_A" }),
    updateB: () => dispach({ type: "UPDATE_B" })
  };
};

export default connect(mapStateToProps, mapDispachToProps)(MultipleReducers);
