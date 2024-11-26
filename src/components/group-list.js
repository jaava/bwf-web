import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getGroups } from '../services/group-serviecs';

function GroupList() {
    const [groups, setGroups] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            await getGroups()
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
            {groups && groups.map(group => {
                return (
                    <Link key={group.id} to={`/details/${group.id}`}>
                        <p>{group.name}: {group.location}</p>
                    </Link>
                )
            })}

        </div>
    );
}

export default GroupList;
