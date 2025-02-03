import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getGroups } from '../../services/group-serviecs';
import GroupListItem from './group-list-item';


function GroupList() {
    const [groups, setGroups] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const history = useHistory();

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

    const groupClicked = groupId => {
        history.push(`details/${groupId}`)
    }
    return (
        <div>
            {groups && groups.map(group => {
                return (
                    <GroupListItem key={group.id} group={group} onClicked={groupClicked}/>
                )
            })}

        </div>
    );
}

export default GroupList;
