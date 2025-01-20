import React, { Fragment } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import useFetchEvent from '../../hooks/fetch-event';
import { useAuth } from '../../hooks/useAuth';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AlarmIcon from '@material-ui/icons/Alarm';
import { DateTime } from 'luxon';
import User from '../user/user';

const useStyles = makeStyles(theme => ({
    bets:{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        margin: '5px 0 0 0'
    }
}));

export default function Event() {
    const { authData } = useAuth();
    const { id } = useParams();
    const classes = useStyles();
    const [data, loading, error] = useFetchEvent(authData.token, id);
    const [event, setEvent] = useState(null);
    const [evtTime, setEvtTime] = useState(null);

    useEffect(() => {

        setEvent(data);
        if (data?.time) {
            const format = "yyyy-MM-dd'T'HH:mm:ss'Z'";

            setEvtTime(DateTime.fromFormat(data.time, format));
        }
    }, [data])


    if (error) {
        return <h1>Error</h1>
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <Fragment>
            {event && evtTime && <div>
                <h3>{event.team1} VS {event.team2}</h3>
                {event.score1>=0 && event.score2>=0 &&
                    <h2>{event.score1} : {event.score2}</h2>
                }
                <h2>
                    <CalendarTodayIcon className={classes.dateTime} />{evtTime.toSQLDate()}
                    <AlarmIcon className={classes.dateTime} />{evtTime.toFormat('HH:mm')}
                </h2>
                <hr />
                <br />
                { event && event.bets && event.bets.map(bet => {
                    return <div key={bet.id} className={classes.bets}>
                        <User user={bet.user}/>
                        <h4>{bet.score1}:{bet.score2}</h4>
                        <h4>PTS</h4>
                    </div>
                    })
                }
            </div>
            }
        </Fragment>
    );
}