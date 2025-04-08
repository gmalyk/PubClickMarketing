import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
      <Router>  
        <div>
          <Switch>
            <Route path="/" exact> <Landpage /> </Route> 
            <Route path="/buy" exact> <Buy /> </Route> 
            <Route path="/terms" exact> <Terms /> </Route> 
            <Route path="/policy" exact> <Policy /> </Route> 
            
            <Route path="/success" exact> <Success /> </Route> 
            <Route path="/cancel" exact> <Cancel /> </Route> 
                        
            <Route path="*" exact> <NotFound /> </Route>
          </Switch>
        </div>
      </Router>
    );
}