import React from "react";
import { Switch, Route } from "react-router-dom";
import GroupList from "./group-list";
import GroupDetail from "./group-detail";
import { useAuth } from "../hooks/useAuth";

function Main() {

    const {authData} = useAuth();

    return (
        <div className="main">
            {authData && <h3>{authData.user.username}</h3>}
            <Switch>
                <Route exact path="/" component={GroupList} />
                <Route path="/details/:id" component={GroupDetail} />


            </Switch>

        </div>
    );
}

export default Main;
