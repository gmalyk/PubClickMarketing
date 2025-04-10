import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "config/routes";

// screens
import Home from "screens/Home";
import NotFound from "screens/NotFound";
// Remove the imports for Terms and Policy since they're now modals

import LoaderContext from "Context/Loader";

function Routers() {
    return (
        <Router>
            <LoaderContext>
                <Switch>
                    <Route exact path={routes.root} component={Home} />
                    
                    {/* Remove the Terms and Policy routes */}
                    
                    <Route path='*' component={NotFound} />
                </Switch>
            </LoaderContext>
        </Router>
    );
}

export default Routers; 