import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getGroup } from '../services/group-serviecs';

function GroupDetail() {
    
    const { id } = useParams();

    const [groups, setGroups] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            await getGroup(id)
                .then(data => {
                    setGroups(data)
                    setLoading(false)
                })

        }
        getData();
    }, [])

    if (error) {
        return <h1>Error</h1>
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <Link to={'/'}>Back</Link>
            <h1>Group Detail {id}</h1>
        </div>
    );
}

export default GroupDetail;
