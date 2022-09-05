import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth/Auth.js";
import ToolsLayout from "layouts/Tools/Tools.js";

import "assets/css/nucleo-icons.css";
import "react-notification-alert/dist/animate.css";
import "assets/scss/toolkys-web.scss?v=1.2.0";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* <Route path="/auth" render={(props) => <AuthLayout {...props} />} /> */}
      <Route path="/tools" render={(props) => <ToolsLayout {...props} />} />
      <Redirect from="/" to="/tools/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
