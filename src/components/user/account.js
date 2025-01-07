import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKey from "@material-ui/icons/VpnKey";
import Email from "@material-ui/icons/Email";
import { register } from "../../services/user-servces";

function Account() {
    const { authData } = useAuth();
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [password2, setPassword2] = useState("");
    // const [email, setEmail] = useState("");

    // const passMatch = () => {
    //     return password === password2;
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();

    }
    return (
        <div>
            <Link to={'/'}>Back</Link>
            <h1>Account</h1>
            
        </div>
    );
}

export default Account;