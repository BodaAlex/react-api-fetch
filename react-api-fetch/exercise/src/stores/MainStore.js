import Reflux from "reflux";
import Actions from "../actions/Action";

class MainStore extends Reflux.Store {
  constructor() {
    super();
    this.state = { isLogged: false, logText: "Login" };
    this.listenTo(Actions.statusUpdate, this.statusUpdate);
  }

  statusUpdate() {
    if (this.state.isLogged == false) {
      this.setState({
        isLogged: true,
        logText: "Logout"
      });
    } else {
      this.setState({
        isLogged: false,
        logText: "Login"
      });
    }
  }
}

export default MainStore;
