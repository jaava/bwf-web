import { status } from "../utils";

export function getEvent(token, id){
    return fetch(`http://127.0.0.1:8888/api/events/${id}/`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        }
    )
    .then(status)
    .catch((error) => {
        console.error(error);
    });
}