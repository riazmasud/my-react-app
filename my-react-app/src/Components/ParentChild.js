import React, { Component } from "react";
import ShowChildren from "./ShowChildren";

class ParentChild extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Parent
        <ShowChildren />
      </div>
    );
  }
}

export default ParentChild;
