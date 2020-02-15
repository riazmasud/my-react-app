import React, { Component } from "react";

class EventHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
    this.increaseByOne = this.increaseByOne.bind(this);
    this.decreaseByOne = this.decreaseByOne.bind(this);
  }

  increaseByOne() {
    this.setState({ number: this.state.number + 1 });
  }

  decreaseByOne() {
    if (this.state.number > 0) {
      this.setState({ number: this.state.number - 1 });
    }
  }

  render() {
    return (
      <div>
        <div>
          <input
            className="number"
            type="text"
            value={this.state.number}
            readonly
          ></input>
        </div>
        <button onClick={this.increaseByOne}>Increase</button>
        <button onClick={this.decreaseByOne}>Decrease</button>
      </div>
    );
  }
}

export default EventHandler;
