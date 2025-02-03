import { Link } from 'react-router-dom';
import { useParams,useHistory } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import useFetchGroup from '../../hooks/fetch-group';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import  User from '../user/user';
import { joinGroup, leaveGroup } from '../../services/group-serviecs';
import { useAuth } from '../../hooks/useAuth';
import Comments from '../comments/comments';
import EventList from '../events/event-list';

const useStyles = makeStyles(theme => ({
    dateTime: {
        fontSize: '18px',
        marginRight: '3px',
        marginTop: '10px',
        color: theme.colors.mainAccentColor
    },
    memberContainer:{
        display: 'grid',
        gridTemplateColumns: 'auto 5fr 1fr',
        alignItems: 'center',
    }
}));

function GroupDetail() {
    
    const classes = useStyles();

    const { id } = useParams();
    const { authData } = useAuth();
    const [data, loading, error] = useFetchGroup(id);
    const [group, setGroup] = useState(null);
    const [isGroup, setInGroup] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const history = useHistory();

    useEffect(() => {

        if(data?.members){
            if(authData?.user){
                setInGroup(!!data.members.find((member) => member.user.id === authData.user.id));
                setIsAdmin(data.members.find(member => member.user.id === authData.user.id)?.admin);
            }
        }
        setGroup(data);
    }, [data])

    const joinHere = () => {
        joinGroup({user: authData.user.id, group: group.id})
        .then(res => {
            console.log(res);
        })
    }

    const leaveHere = () => {
        leaveGroup({user: authData.user.id, group: group.id})
        .then(res => {
            console.log(res);
        })
    }

    const addEvent = () => {
        history.push('/event-form', {group});
    }

    if (error) {
        return <h1>Error</h1>
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <Link to={'/'}><ChevronLeftIcon /></Link>
            {group && <Fragment>
                <h1>Group Detail {group.id}{group.name}: {group.location}</h1>
                <h2>{group.description}</h2>
                {isGroup ?
                <Button onClick={()=>leaveHere()} variant="contained" 
                color="primary">Leave Group</Button>
                :
                <Button onClick={()=>joinHere()} variant="contained" 
                color="primary">Join Group</Button>
                }
                
                {isAdmin &&
                <Button onClick={()=>addEvent()} variant="contained" 
                color="primary">Add new Event</Button>}

                <EventList events={group.events} />

                <br/>
                <h3>Members:</h3>
                { group.members.map(member=> {
                    
                    return <div key={member.id} className={classes.memberContainer}>
                        <User user={member.user} />
                        <p></p>
                        <p>{member.points}pts</p>
                        </div> 
                })}

                <Comments group={group}/>
            </Fragment>}
            
        </div>
    );
}

export default GroupDetail;
