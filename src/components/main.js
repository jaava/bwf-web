import React from "react";
import { Switch, Route } from "react-router-dom";
import GroupList from "./group-list";
import GroupDetail from "./group-detail";

function Main() {
    return (
        <div className="main">
            <Switch>
                <Route exact path="/" component={GroupList} />
                <Route path="/details/:id" component={GroupDetail} />


            </Switch>

        </div>
    );
}

export default Main;
