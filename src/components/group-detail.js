import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetchGroup from '../hooks/fetch-group';

function GroupDetail() {
    
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
            {group && <h1>Group Detail {group.id}{group.name}: {group.location}</h1>}
            
        </div>
    );
}

export default GroupDetail;
