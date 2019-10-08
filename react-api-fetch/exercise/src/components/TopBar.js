import React from "react";
import Reflux from "reflux";
import { Link } from "react-router-dom";
import Button from "./Button";
import initials from "../images/initials-example.png";
import MainStore from "../stores/MainStore";
import Actions from "../actions/Action";
import logo from "../images/api.svg";

export default class TopBar extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = MainStore;
  }

  render() {
    return (
      <header className="navbar">
        <div className="container">
          <div className="logo">
            <div id="logo">
              <Link to="/">
                <img alt={"logo"} src={logo} />
              </Link>
            </div>
            <div>{"REQUEST"}</div>
          </div>
          <div className="nav-btn">
            {!this.state.isLogged ? (
              <div>
                <Button
                  handleClick={Actions.statusUpdate}
                  style={{
                    backgroundColor: "rgb(229,229,229)",
                    color: "rgb(25,25,25)"
                  }}
                >
                  {this.state.logText}
                </Button>
                <Button
                  style={{
                    backgroundColor: "rgb(33,21,59)",
                    color: "rgb(243,243,243)"
                  }}
                >
                  Signup
                </Button>
              </div>
            ) : (
              <div className="isLogged">
                <img src={initials} alt="ceva" />
                <Link to="/home">
                  <Button
                    handleClick={Actions.statusUpdate}
                    style={{
                      backgroundColor: "rgb(33,21,59)",
                      color: "rgb(243,243,243)"
                    }}
                  >
                    {this.state.logText}
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}

const styles = {
  logo: {
    float: "left",
    margin: 8
  }
};
