import React, { Component } from "react";
import { connect } from "react-redux";

class MoreComplexRedux extends Component {
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
        <hr />
        <div>History</div>
        <ul>
          {this.props.history.map(el => (
            <li
              className="history-item"
              key={el.id}
              onClick={() => this.props.onDelItem(el.id)}
            >
              {el.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    history: state.history
  };
};

const mapDispachToProps = dispach => {
  return {
    onAgeUp: () => dispach({ type: "AGE_UP_AND_SAVE_TO_HISTORY", value: 1 }),
    onAgeDown: () =>
      dispach({ type: "AGE_DOWN_AND_SAVE_TO_HISTORY", value: 1 }),
    onDelItem: id => dispach({ type: "DEL_ITEM_FROM_HISTORY", key: id })
  };
};

export default connect(mapStateToProps, mapDispachToProps)(MoreComplexRedux);
