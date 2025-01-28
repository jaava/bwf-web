import { useLocation } from 'react-router-dom';
import { CssTextField } from '../layout/elements';

export default function EventForm() {

    const { state } = useLocation();
    const { group } = state;
    return (
        <div>
            <h1>New event for a group {group.id}</h1>
            <CssTextField   label="Team 1"/>
        </div>
    );
}