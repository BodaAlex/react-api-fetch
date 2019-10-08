import React from "react";
import Reflux from "reflux";
import loading from "../images/loading.gif";
import FetchStore from "../stores/FetchStore";
import Actions from "../actions/Action";

class UserList extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = FetchStore;
  }

  // fetch users
  componentDidMount() {
    Actions.getUsers();
  }

  render() {
    return (
      <React.Fragment>
        {!this.state.fetched ? (
          <img className="loading" src={loading} alt="ceva" />
        ) : (
          <div className="container users">
            <h1>Same Friendly Guide</h1>
            <p>
              Here the fetched data is listed, 20 users. Clicking on any of the
              items listed below will take you to its specific route. There you
              will find a "Back" button, click on it to come back here. Click on
              "Logout" to go back to "/home"
            </p>
            {this.state.userList.map(user => (
              <ListItem
                sendProps={this.props}
                history={this.props.history}
                key={user.login.uuid}
                detail={user}
              />
            ))}
          </div>
        )}
      </React.Fragment>
    );
  }
}

const ListItem = props => {
  return (
    <div
      onClick={() => {
        props.history.push(`users/${props.detail.login.uuid}`);
      }}
      className="list"
    >
      <h3>First name: {props.detail.name.first}</h3>
      <h3>Last name: {props.detail.name.last}</h3>
      <p>Email: {props.detail.email}</p>
      <p>Phone: {props.detail.phone}</p>
    </div>
  );
};

export default UserList;
