import React from "react";
import Reflux from "reflux";
import { Link } from "react-router-dom";
import Button from "./Button";
import MainStore from "../stores/MainStore";
import Actions from "../actions/Action";

export default class HomeContent extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = MainStore;
  }

  render() {
    return (
      <div className="container">
        <React.Fragment>
          <h1>Friendly guide</h1>
          <p>
            Clicking on any "Login" button will log you in and a "User List"
            button will appear. Clicking on it will take you to the "/users"
            route, Click on the "Logout" button in the navigation to come back
            here
          </p>
          <Button
            style={{ marginLeft: "0", backgroundColor: "rgb(127,79,224)" }}
            handleClick={Actions.statusUpdate}
          >
            {this.state.logText}
          </Button>
          <Link to="/">
            <button
              className="btn"
              style={{
                marginRight: "10px",
                backgroundColor: "rgb(102,63,180)",
                color: "rgb(243,243,243)"
              }}
            >
              Landing
            </button>
          </Link>
          {this.state.isLogged == true ? (
            <Link to="/users">
              <button
                className="btn"
                style={{
                  backgroundColor: "rgb(69,43,122)",
                  color: "rgb(243,243,243)"
                }}
              >
                User List
              </button>
            </Link>
          ) : null}
        </React.Fragment>
      </div>
    );
  }
}
