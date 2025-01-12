import { useState, useEffect } from 'react';
import { getGroup } from '../services/group-serviecs';

function useFetchGroup(groupId) {

    const [group, setGroup] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const data = await getGroup(groupId);
            setGroup(data);
            setLoading(false);
            setError(null);
        }
        getData();

    }, [groupId])

    return [group, loading, error];
}

export default useFetchGroup;