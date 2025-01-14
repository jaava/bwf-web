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