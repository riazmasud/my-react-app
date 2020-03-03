import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import TwoWayBinding from "../TwoWayBinding";
import EventHandler from "../EventHandler";
import SimpleRedux from "../SimpleRedux";
import MoreComplexRedux from "../MoreComplexRedux";
import MultipleReducers from "../MultipleReducers";
import ReduxSaga from "../ReduxSaga";
import ParentChild from "../ParentChild";
import ToDoList from "../ToDoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEdit,
  faList,
  faTrash,
  faWarehouse,
  faSignInAlt,
  faArrowsAltH,
  faTools,
  faArrowsAltV
} from "@fortawesome/free-solid-svg-icons";

class Menu extends Component {
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
                <Link to={"/simple-redux"}>
                  <FontAwesomeIcon icon={faTools} color="white" /> Simple Redux
                </Link>
              </li>
              <li>
                <Link to={"/more-complex-redux"}>
                  <FontAwesomeIcon icon={faTools} color="white" /> Bit More
                  Complex Redux
                </Link>
              </li>
              <li>
                <Link to={"/multiple-reducers"}>
                  <FontAwesomeIcon icon={faTools} color="white" /> Multiple
                  Reducers
                </Link>
              </li>
              <li>
                <Link to={"/redux-with-saga"}>
                  <FontAwesomeIcon icon={faTools} color="white" /> Redux With
                  Saga
                </Link>
              </li>
              <li>
                <Link to={"/parent-child"}>
                  <FontAwesomeIcon icon={faArrowsAltV} color="white" />
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
            <Route exact path="/simple-redux" component={SimpleRedux} />
            <Route
              exact
              path="/more-complex-redux"
              component={MoreComplexRedux}
            />
            <Route
              exact
              path="/multiple-reducers"
              component={MultipleReducers}
            />
            <Route exact path="/redux-with-saga" component={ReduxSaga} />
            <Route exact path="/parent-child" component={ParentChild} />
            <Route exact path="/to-do-list" component={ToDoList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Menu;
