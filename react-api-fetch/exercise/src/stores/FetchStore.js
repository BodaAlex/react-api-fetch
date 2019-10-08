import Reflux from "reflux";
import Actions from "../actions/Action";
import axios from "axios";

class FetchStore extends Reflux.Store {
  constructor() {
    super();
    this.state = { userList: [], fetched: false };
    this.listenTo(Actions.getUsers, this.getUsers);
  }

  getUsers = () => {
    const users = axios
      .get("https://randomuser.me/api/?page=1&seed=same&results=20")
      .then(response => {
        return response.data.results;
      })
      .catch(function(error) {
        console.log(error);
      });
    users.then(userVal => {
      this.setState({
        userList: userVal,
        fetched: true
      });
    });
  };
}

export default FetchStore;
