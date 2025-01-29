import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CssTextField } from '../layout/elements';
import { Button } from '@material-ui/core';

export default function EventForm() {

    const { state } = useLocation();
    const { group } = state;
    const [team1, setTeam1] = useState();
    const [team2, setTeam2] = useState();
    const [time, setTime] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('submitted', team1, team2, time);
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