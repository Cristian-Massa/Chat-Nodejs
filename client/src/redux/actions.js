const POSTMESSAGE = 'POSTMESSAGE'
const REGISTERUSER = 'REGISTERUSER'
const LOGINUSER = 'LOGINUSER'


export function postMessage(data){
    return({
        type: POSTMESSAGE,
        payload: data
    })
}

export function registerUser(data){
    return({
        type: REGISTERUSER,
        payload: data
    })
}

export function loginUser(data){
    return({
        type: LOGINUSER,
        payload: data
    })
}