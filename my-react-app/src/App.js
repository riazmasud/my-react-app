import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import TwoWayBinding from "./Components/TwoWayBinding";
import EventHandler from "./Components/EventHandler";
import ParentChild from "./Components/ParentChild";
import ToDoList from "./Components/ToDoList";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEdit,
  faList,
  faTrash,
  faWarehouse,
  faSignInAlt,
  faArrowsAltH,
  faTools
} from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <ul>
              <li>
                <Link to={"/"}>
                  <FontAwesomeIcon icon={faHome} color="white" /> Home
                </Link>
              </li>
              <li>
                <Link to={"/login"}>
                  <FontAwesomeIcon icon={faSignInAlt} color="white" />
                  Login
                </Link>
              </li>
              <li>
                <Link to={"/two-way-binding"}>
                  <FontAwesomeIcon icon={faArrowsAltH} color="white" /> Two Way
                  Binding
                </Link>
              </li>
              <li>
                <Link to={"/event-handler"}>
                  <FontAwesomeIcon icon={faTools} color="white" /> Event Handler
                </Link>
              </li>
              <li>
                <Link to={"/parent-child"}>
                  <FontAwesomeIcon icon={faArrowsAltH} color="white" />
                  Passing Between Parent/Child
                </Link>
              </li>
              <li>
                <Link to={"/to-do-list"}>
                  <FontAwesomeIcon icon={faList} color="white" />
                  To-Do List
                </Link>
              </li>
            </ul>
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/two-way-binding" component={TwoWayBinding} />
            <Route exact path="/event-handler" component={EventHandler} />
            <Route exact path="/parent-child" component={ParentChild} />
            <Route exact path="/to-do-list" component={ToDoList} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
