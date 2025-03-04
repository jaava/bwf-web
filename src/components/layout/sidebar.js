import React from "react";
import { useState} from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKey from "@material-ui/icons/VpnKey";
import { auth } from "../../services/user-servces";
import { useAuth } from "../../hooks/useAuth";
import { Link, useHistory } from "react-router-dom";
import User from "../user/user";

function Sidebar() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { authData, setAuth } = useAuth();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await auth({ username, password });
        setAuth(data);
    }

    const logout = () => {
        setAuth(null);
    }

    const account = () => {
        history.push('/account');
    }

    return (
        <div className="sidebar">
            {!authData ?
                <div>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Username"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <VpnKey />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Password" type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Button color="primary" variant="contained" type="submit">
                            login
                        </Button>
                    </form>
                    <Link to={'/register'}>Register here if you don't have an account yet.</Link>
                </div>
                : <div>
                    <User user={authData.user}/>
                    <br />
                    <br />
                    <Button color="primary" variant="contained" onClick={() => logout()}>
                        Logout
                    </Button>
                    <Button color="primary" variant="contained" onClick={() => account()}>
                        My Account
                    </Button>
                </div>

            }
        </div>
    );
}

export default Sidebar;
