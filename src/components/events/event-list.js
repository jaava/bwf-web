import React, { Fragment } from 'react';
import { DateTime } from 'luxon';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AlarmIcon from '@material-ui/icons/Alarm';
import { makeStyles } from '@material-ui/core/styles';

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

export default function EventList({events}) {
    const classes = useStyles();
    return (
        <Fragment>
            <h3>Events:</h3>
            { events && events.map(event=> {
                const format = "yyyy-MM-dd'T'HH:mm:ss'Z'";
                const evtTime = DateTime.fromFormat(event.time, format);
                return <div key={event.id}>
                    <p>{event.team1} VS {event.team2}</p>
                    <p>
                        <CalendarTodayIcon className={classes.dateTime}/>{evtTime.toSQLDate()} 
                        <AlarmIcon className={classes.dateTime}/>{evtTime.toFormat('HH:mm')}</p>
                    </div>
            })}
        </Fragment>
    );
}