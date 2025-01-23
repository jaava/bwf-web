import { Link, useParams, useHistory, useLocation } from 'react-router-dom';

export default function EventForm() {

    const { state } = useLocation();
    const { group } = state;
    return (
        <div>
            <h1>New event for a group {group.id}</h1>
        </div>
    );
}