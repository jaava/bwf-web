import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKey from "@material-ui/icons/VpnKey";

function Register() {
    const { authData } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [email, setEmail] = useState("");

    const passMatch = () => {
        return password === password2;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passMatch()) {
            console.log("Passwords match", username, password, email);
        } else {
            console.log("Passwords don't match");
        }
    }
    return (
        <div>
            <Link to={'/'}>Back</Link>
            <h1>Register</h1>
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
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <VpnKey />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Repeat Password" type="password"
                            onChange={(e) => setPassword2(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <AccountCircle />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Button color="primary" variant="contained" type="submit">
                    Register
                </Button>
            </form>
        </div>
    );
}

export default Register;