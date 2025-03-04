import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import VpnKey from "@material-ui/icons/VpnKey";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { uploadAvatar } from "../../services/user-servces";
import { changePass } from "../../services/user-servces";
import { NotificationManager } from "react-notifications";
import { CssTextField} from "../layout/elements";

function Account() {
    const { authData } = useAuth();
    const [image, setImage] = useState(null);
    const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");


    const passMatch = () => {
        return password === password2;
    }

    const uploadFile = async (e) => {
        e.preventDefault();
        const uploadData = new FormData();
        uploadData.append('image', image, image.name);

        const uploaded = await uploadAvatar(authData.user.profile.id, uploadData);
    
        if(uploaded){
            NotificationManager.success("Avatar uploaded successfully");
        }else{
            NotificationManager.error("Error. Avatar not uploaded");
        }
    }

    const submitChangePass = async (e) => {
        e.preventDefault();
        if (passMatch()) {
            const passData = await changePass({ old_password: oldPassword, new_password: password }, 
                authData.user.id, 
                authData.token);
            if(passData){
                NotificationManager.success("Password changed successfully");
            }
        } else {
            NotificationManager.error("Passwords don't match");
        }
    }
    return (
        <div>
            <Link to={'/'}><ChevronLeftIcon /></Link>
            <h1>Change Your Picture</h1>
            <form onSubmit={uploadFile}>
                <label>
                    <p>Upload your avatar</p>
                    <TextField type="file" onChange={e => setImage(e.target.files[0])} />
                </label>
                <Button type="submit" variant="contained" color="primary">Upload file</Button>
            </form>
            <br />
            <h1>Change Your Password</h1>
            <form onSubmit={submitChangePass}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <VpnKey />
                    </Grid>
                    <Grid item>
                        <CssTextField id="input-with-icon-grid" label="Old Password" type="password"
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <VpnKey />
                    </Grid>
                    <Grid item>
                        <CssTextField id="input-with-icon-grid" label="New Password" type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <VpnKey />
                    </Grid>
                    <Grid item>
                        <CssTextField id="input-with-icon-grid" label="Repeat Password" type="password"
                            onChange={(e) => setPassword2(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary" 
                
                >CHANGE PASSWORD</Button>
            </form>
        </div>
    );
}

export default Account;