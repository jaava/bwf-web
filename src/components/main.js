import React from "react";
import { Switch, Route } from "react-router-dom";
import GroupList from "./group-list";

function Main() {
    return (
        <div className="main">
            <Switch>
                <Route exact path="/" component={GroupList} />
                <Route path="/details">
                    <h1>Details</h1>
                </Route>

            </Switch>

        </div>
    );
}

export default Main;
