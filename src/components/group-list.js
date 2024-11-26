import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function GroupList() {
    const [groups, setGroups] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            await fetch('http://127.0.0.1:8888/api/groups/')
                .then(response => response.json())
                .then(data => {
                    setGroups(data)
                    setLoading(false)
                })
                .catch(error => {
                    setError(true)
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
