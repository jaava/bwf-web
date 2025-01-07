import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import useFetchGroup from '../../hooks/fetch-group';
import { DateTime } from 'luxon';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AlarmIcon from '@material-ui/icons/Alarm';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles(theme => ({
    dateTime: {
        fontSize: '18px',
        marginRight: '3px',
        marginTop: '10px',
        color: theme.colors.mainAccentColor
    }
}));

function GroupDetail() {
    
    const classes = useStyles();

    const { id } = useParams();
    const [data, loading, error] = useFetchGroup(id);
    const [group, setGroup] = useState(null);

    useEffect(() => {
        setGroup(data);
    }, [data])

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
            </Fragment>}
            
        </div>
    );
}

export default GroupDetail;
