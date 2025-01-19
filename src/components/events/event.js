import React, { Fragment } from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import useFetchEvent from '../../hooks/fetch-event';
import { useAuth } from '../../hooks/useAuth';

const useStyles = makeStyles(theme => ({

}));

export default function Event() {
    const { authData } = useAuth();
    const { id } = useParams();
    const classes = useStyles();
    const [ data, loading, error ] = useFetchEvent(authData.token,id);
    const [ event, setEvent ] = useState(null);
    return (
        <Fragment>
            <h3>Events info here</h3>
            
        </Fragment>
    );
}