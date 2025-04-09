import React from "react";

import {
  BrowserRouter as Router,
  Switch,HashRouter,
  Route, } from "react-router-dom";

import Landpage from 'screens/Landpage' 
import NotFound from 'screens/NotFound' 

import Login from 'screens/Authentication/Login' 
import Register from 'screens/Authentication/Register' 
import Forgot from 'screens/Authentication/Forgot' 
import CreatePassword from 'screens/Authentication/CreatePassword' 

import DashboardHome from 'screens/Dashboard/Home' 
import DashboardMe from 'screens/Dashboard/Me' 
import Terms from "screens/Terms";
import Policy from "screens/Policy";
import Buy from "screens/Buy";
import Success from "screens/Success";
import Cancel from "screens/Cancel";

export default function AppRouter() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Landpage} />
          <Route path="/buy" exact component={Buy} />
          <Route path="/terms" exact component={Terms} />
          <Route path="/policy" exact component={Policy} />
          <Route path="/success" exact component={Success} />
          <Route path="/cancel" exact component={Cancel} />
          <Route path="*" component={NotFound} />
        </Switch>
    </HashRouter>
    );
}