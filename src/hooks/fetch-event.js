import { useState, useEffect } from 'react';
import { getEvent } from '../services/event-services';

function useFetchEvent(token,eventId) {

    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const data = await getEvent(token,eventId);
            setEvent(data);
            setLoading(false);
            setError(null);
        }
        getData();

    }, [eventId])

    return [event, loading, error];
}

export default useFetchEvent;