import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';
import { CssTextField } from '../layout/elements';
import { Button } from '@material-ui/core';
import { DateTime } from 'luxon';
import { createEvent } from '../../services/event-services';
import { NotificationManager } from "react-notifications";

export default function EventForm() {

    const { authData } = useAuth();
    const history = useHistory();
    const { state } = useLocation();
    const { group } = state;
    const [team1, setTeam1] = useState();
    const [team2, setTeam2] = useState();
    const [time, setTime] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('submitted', team1, team2, time);
        const format = "yyyy-MM-dd'T'HH:mm";
        const utcTime = DateTime.fromFormat(time, format).toUTC().toFormat(format);
        const dataSend = { team1, team2, 'time': utcTime, 'group': group.id };
        const eventData = await createEvent(authData.token, dataSend);
        if (eventData) {
            NotificationManager.success("Event created successfully");
            history.push(`/details/${group.id}`);
        } else {
            NotificationManager.error("Error. Event not created");
        }
    };
    return (
        <div>
            <h1>New event for a group {group.id}</h1>
            <form onSubmit={handleSubmit}>
                <CssTextField label="Team 1" onChange={e => setTeam1(e.target.value)} />
                <CssTextField label="Team 2" onChange={
                    e => setTeam2(e.target.value)
                } />
                <br />
                <CssTextField
                    id="datetime-local"
                    label="Date and Time of Event"
                    type="datetime-local"

                    InputLabelProps={{
                        shrink: true,
                    }}

                    onChange={e => setTime(e.target.value)}
                />
                <br />
                <Button type="submit" variant="contained" color="primary">
                    Create Event
                </Button>
            </form>

        </div>
    );
}