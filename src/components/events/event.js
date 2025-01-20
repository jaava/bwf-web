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

const useStyles = makeStyles(theme => ({

}));

export default function Event() {
    const { authData } = useAuth();
    const { id } = useParams();
    const classes = useStyles();
    const [ data, loading, error ] = useFetchEvent(authData.token,id);
    const [ event, setEvent ] = useState(null);
    const [ evtTime , setEvtTime ] = useState(null);

    useEffect(() => {

        setEvent(data);
        if(data?.time){
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
            { event && evtTime && <div>
                <h3>{event.team1} VS {event.team2}</h3>
            <h2>
            <CalendarTodayIcon className={classes.dateTime}/>{evtTime.toSQLDate()} 
            <AlarmIcon className={classes.dateTime}/>{evtTime.toFormat('HH:mm')}
            </h2>
            </div>
            }
        </Fragment>
    );
}