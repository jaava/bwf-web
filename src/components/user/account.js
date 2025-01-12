import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { uploadAvatar } from "../../services/user-servces";

function Account() {
    const { authData } = useAuth();
    const [image, setImage] = useState(null);
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [password2, setPassword2] = useState("");
    // const [email, setEmail] = useState("");

    // const passMatch = () => {
    //     return password === password2;
    // }

    const uploadFile = async (e) => {
        e.preventDefault();
        const uploadData = new FormData();
        uploadData.append('image', image, image.name);

        await uploadAvatar(authData.user.profile.id, uploadData);
    }
    return (
        <div>
            <Link to={'/'}>Back</Link>
            <h1>Account</h1>
            <form onSubmit={uploadFile}>
                <label>
                    <p>Upload your avatar</p>
                    <TextField type="file" onChange={ e => setImage(e.target.files[0])} />
                </label>
                <Button type="submit" variant="contained" color="primary">Upload file</Button>
            </form>
        </div>
    );
}

export default Account;