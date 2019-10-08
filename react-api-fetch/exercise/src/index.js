import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Landing from "./routes/Landing";
import Home from "./routes/Home";
import UserList from "./routes/UserList";
import UserDetail from "./routes/UserDetail";
import TopBar from "./components/TopBar";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <TopBar />
      <div>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/users" component={UserList} exact />
        <Route path="/users/:id" component={UserDetail} />
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
