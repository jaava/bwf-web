import { useParams } from 'react-router-dom';

function GroupDetail() {
    
    const { id } = useParams();

    return (
        <div>
            <h1>Group Detail {id}</h1>
        </div>
    );
}

export default GroupDetail;
