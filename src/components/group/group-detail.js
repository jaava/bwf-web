import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import useFetchGroup from '../../hooks/fetch-group';
import { DateTime } from 'luxon';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AlarmIcon from '@material-ui/icons/Alarm';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import  User from '../user/user';
import { joinGroup } from '../../services/group-serviecs';
import { useAuth } from '../../hooks/useAuth';

const useStyles = makeStyles(theme => ({
    dateTime: {
        fontSize: '18px',
        marginRight: '3px',
        marginTop: '10px',
        color: theme.colors.mainAccentColor
    },
    memberContainer:{
        display: 'flex',
        gridTemplateColumns: '100px auto',
    }
}));

function GroupDetail() {
    
    const classes = useStyles();

    const { id } = useParams();
    const { authData } = useAuth();
    const [data, loading, error] = useFetchGroup(id);
    const [group, setGroup] = useState(null);

    useEffect(() => {
        setGroup(data);
    }, [data])

    const joinHere = () => {
        joinGroup({user: authData.user.id, group: group.id})
        .then(res => {
            console.log(res);
        })
    }

    if (error) {
        return <h1>Error</h1>
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <Link to={'/'}>Back</Link>
            {group && <Fragment>
                <h1>Group Detail {group.id}{group.name}: {group.location}</h1>
                <h2>{group.description}</h2>
                <Button onClick={()=>joinHere()} variant="contained" color="primary">Join Group</Button>
                <h3>Events:</h3>
                { group.events.map(event=> {
                    const format = "yyyy-MM-dd'T'HH:mm:ss'Z'";
                    const evtTime = DateTime.fromFormat(event.time, format);
                    return <div key={event.id}>
                        <p>{event.team1} VS {event.team2}</p>
                        <p>
                            <CalendarTodayIcon className={classes.dateTime}/>{evtTime.toSQLDate()} 
                            <AlarmIcon className={classes.dateTime}/>{evtTime.toFormat('HH:mm')}</p>
                        </div>
                })}
                <br/>
                <h3>Members:</h3>
                { group.members.map(member=> {
                    
                    return <div key={member.id} className={classes.memberContainer}>
                        <User user={member.user} />
                        <p>{member.points}pts</p>
                        </div>
                })}
            </Fragment>}
            
        </div>
    );
}

export default GroupDetail;
