import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./components/app";
import NotFound from "./components/notFound";
import NavBar from './components/navbar';
import Footer from './components/footer';

// application routes made with react router
const Routes = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={App} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
    )
}

export default Routes;
