import React from "react";
import Reflux from "reflux";
import { Link } from "react-router-dom";
import FetchStore from "../stores/FetchStore";
import Actions from "../actions/Action";

class UserDetail extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = FetchStore;
  }

  // fetch again so data does not get lost on refresh
  componentDidMount() {
    Actions.getUsers();
  }

  render() {
    // get user id and remove "/users/"
    var res = this.props.location.pathname.substring(7);
    return (
      <div>
        {this.state.userList.map(user => {
          if (user.login.uuid === res) {
            return (
              <div className="container">
                <div className="postCardContainer">
                  <div className="postCard">
                    <ListItemDetails
                      sendProps={this.props}
                      history={this.props.history}
                      key={user.login.salt}
                      detail={user}
                    />
                  </div>
                </div>
                <Link to="/users">
                  <button className="btn">Back</button>
                </Link>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

const ListItemDetails = props => {
  return (
    <div>
      <div className="postCardTop">
        <img src={props.detail.picture.large} alt="ceva" />
      </div>
      <div className="postCardbottom">
        <p>First name: {props.detail.name.first}</p>
        <p>Last name: {props.detail.name.last}</p>
        <p>Email: {props.detail.email}</p>
        <p>Phone number: {props.detail.phone}</p>
      </div>
    </div>
  );
};

export default UserDetail;
