export function status(res){
    // res.ok is true if status is 200-299
    if(res.status >= 200 && res.status < 300){
        return res.json()
    } 

    throw new Error(res.statusText);
}