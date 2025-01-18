import { status } from "../utils";

export function getGroup(id){
    return fetch(`http://127.0.0.1:8888/api/groups/${id}/`)
    .then(status)
    .catch((error) => {
        console.error(error);
    });
}

export function getGroups(){
    return fetch('http://127.0.0.1:8888/api/groups/')
    .then(status)
    .catch((error) => {
        console.error(error);
    });
}

export function joinGroup(data){
    return fetch('http://127.0.0.1:8888/api/members/join/', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(data) 
    })
    .then(status)
    .catch((error) => {
        console.error(error);
    });
}

export function leaveGroup(data){
    return fetch('http://127.0.0.1:8888/api/members/leave/', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(data) 
    })
    .then(status)
    .catch((error) => {
        console.error(error);
    });
}


export function postComment(token, description, group, user){
    return fetch('http://127.0.0.1:8888/api/comments/', { 
        method: 'POST', 
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }, 
        body: JSON.stringify({description, group, user}) 
    })
    .then(status)
    .catch((error) => {
        console.error(error);
    });
}
