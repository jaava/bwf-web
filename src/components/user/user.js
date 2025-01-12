import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
    container:{
        width: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
    },
    username: {
        padding:0,
        margin:0,
    }
});

function User({user}) {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Avatar alt="user avatar" src={"http://127.0.0.1:8888"+user.profile.image} />
            <h4 className={classes.username}>{user.username}</h4>
        </div>
        
    );
}

export default User;
