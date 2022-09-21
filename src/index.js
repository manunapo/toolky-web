import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Analytics from 'react-router-ga';

import ToolsLayout from "layouts/Tools/Tools.js";

import "assets/css/nucleo-icons.css";
import "react-notification-alert/dist/animate.css";
import "assets/scss/toolkys-web.scss?v=1.2.0";


ReactDOM.render(
  <BrowserRouter>
    <Analytics id="G-98J31382D2">
      <Switch>
        {/* <Route path="/auth" render={(props) => <AuthLayout {...props} />} /> */}
        <Route path="/tools" render={(props) => <ToolsLayout {...props} />} />
        <Redirect from="/" to="/tools/home" />
      </Switch>
    </Analytics>
  </BrowserRouter>,
  document.getElementById("root")
);
