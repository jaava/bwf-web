import React from "react";
import { Switch, Route } from "react-router-dom";
import GroupList from "../group/group-list";
import GroupDetail from "../group/group-detail";
import Register from "../user/register";
import Account from "../user/account";
import { useAuth } from "../../hooks/useAuth";

function Main() {

    const {authData} = useAuth();

    return (
        <div className="main">
            <Switch>
                <Route exact path="/" component={GroupList} />
                <Route path="/details/:id" component={GroupDetail} />
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/account">
                    <Account />
                </Route>


            </Switch>

        </div>
    );
}

export default Main;
