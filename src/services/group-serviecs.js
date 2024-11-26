export function getGroup(id){
    return fetch(`http://127.0.0.1:8888/api/groups/${id}/`)
    .then(response => response.json())
    .catch(error => {
        console.log(error)
    })
}

export function getGroups(){
    return fetch('http://127.0.0.1:8888/api/groups/')
    .then(response => response.json())
    .catch(error => {
        console.log(error)
    })
}