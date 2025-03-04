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

export function placeBet(token, item){
    return fetch(`http://127.0.0.1:8888/api/bets/place_bet/`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(item)
        }
    )
    .then(status)
    .catch((error) => {
        console.error(error);
    });
}

export function setResults(token, item){
    return fetch(`http://127.0.0.1:8888/api/events/${item.event}/set_result/`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(item)
        }
    )
    .then(status)
    .catch((error) => {
        console.error(error);
    });
}

export function createEvent(token, data){
    return fetch(`http://127.0.0.1:8888/api/events/`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(data)
        }
    )
    .then(status)
    .catch((error) => {
        console.error(error);
    });
}