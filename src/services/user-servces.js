export function auth(credentials){
    return fetch("http://127.0.0.1:8888/api/authenticate/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    })
    .then((res) => res.json())
    .catch((error) => {
        console.log("Error: ", error);
    });
}

export function register(userData){
    return fetch("http://127.0.0.1:8888/api/users/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then((res) => res.json())
    .catch((error) => {
        console.log(error);
    });
}

export function uploadAvatar(profileId, data){
    return fetch(`http://127.0.0.1:8888/api/profile/${profileId}/`, {
        method: "PUT",
        body: data
    })
    .then((res) => res.json())
    .catch((error) => {
        console.log(error);
    });
}

export function changePass(userData, userId){
    return fetch(`http://127.0.0.1:8888/api/users/${userId}/change_pass/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then((res) => res.json())
    .catch((error) => {
        console.log(error);
    });
}