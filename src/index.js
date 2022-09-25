import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ReactGA from "react-ga4";

import ToolsLayout from "layouts/Tools/Tools.js";

import "assets/css/nucleo-icons.css";
import "react-notification-alert/dist/animate.css";
import "assets/scss/toolkys-web.scss?v=1.2.0";

ReactGA.initialize("G-98J31382D2");

function sendPageView(path) {
  ReactGA.send({ hitType: "pageview", page: path });
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* <Route path="/auth" render={(props) => <AuthLayout {...props} />} /> */}
      <Route path="/tools" render={(props) => <ToolsLayout {...props} sendPageView={sendPageView} />} />
      <Redirect from="/" to="/tools/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
