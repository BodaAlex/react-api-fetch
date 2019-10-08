import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div className="container landing" style={{ padding: 10 }}>
        <h1>Description</h1>
        <p>
          This React aplication does the following: uses state changes to manage
          the login function, fetches data from RandomAPI, then displays it in a
          user list. Every user has its own id, wich I use to create a unique
          Post Card for every one of them <br></br>
        </p>
        <p>
          For a detailed description about what technology I used, please check
          the myREADME file <br></br>
        </p>
        <p>
          Right now, you're on the Landing page. Click the button bellow to
          access the Home page<br></br>
        </p>
        <Link to="/home">
          <button className="btn">HOME</button>
        </Link>
        <p>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
      </div>
    );
  }
}
