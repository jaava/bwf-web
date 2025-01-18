import React from "react";
import { useState } from "react";
import Comment from "./comment";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { postComment } from "../../services/group-serviecs";
import { useAuth } from "../../hooks/useAuth";


function Comments({group}) {
    const { authData } = useAuth();
    const [newComment, setNewComment] = useState('');

    const getUser = userId => {
        return group.members.find(member => member.user.id === userId).user;
    }

    const sendcomment = () => {
        postComment(authData.token, newComment, group.id, authData.user.id)
        .then(res => {
            setNewComment('');
            group.comments.unshift(res);
        }
        )
    }

    return (
        <div className="header">
            <hr/>
            <h1>Comments:</h1>

            <TextField label="New Comment" 
            multiline
            fullWidth
            rows={4}
            variant="outlined" 
            value={newComment}
            onChange={(evt) => setNewComment(evt.target.value)}
            />

            <Button onClick={() => sendcomment()} disabled={!newComment} variant="contained" color="primary">Send Comment</Button>
            <br/>
            {group.comments.map(comment=> {
                return <Comment comment={comment} user={getUser(comment.user)}/>
            })}
        </div>
    );
}

export default Comments;
