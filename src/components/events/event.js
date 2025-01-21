import React, { Fragment } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import useFetchEvent from '../../hooks/fetch-event';
import { useAuth } from '../../hooks/useAuth';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AlarmIcon from '@material-ui/icons/Alarm';
import TextField from '@material-ui/core/TextField';
import { DateTime } from 'luxon';
import User from '../user/user';
import { Button } from '@material-ui/core';

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
    const [score1, setScore1] = useState(null);
    const [score2, setScore2] = useState(null);

    useEffect(() => {

        setEvent(data);
        if (data?.time) {
            const format = "yyyy-MM-dd'T'HH:mm:ss'Z'";

            setEvtTime(DateTime.fromFormat(data.time, format));
        }
    }, [data])

    const sendBet = async () => {
        console.log('sendBet', score1, score2);
    }

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
                <hr />
                <br />
                <TextField type="number" label="Score 1" onChange={e=>setScore1(e.target.value)}/>
                <TextField type="number" label="Score 2" onChange={e=>setScore2(e.target.value)}/>
                <Button variant="contained" color="primary" onClick={() => sendBet()} disabled={!score1 || !score2}>Place Bet</Button>
            </div>
            }
        </Fragment>
    );
}