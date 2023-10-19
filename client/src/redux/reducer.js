import axios from 'axios'
const initialState = {
    contacts: {
    },
    user:{
        userName: "" ,
    },
    errors: []
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'REGISTERUSER':
            axios.post('http://localhost:3001/register', action.payload)
                .then(res => res.data)
                .then(data =>{
                    return({
                        ...state,
                        user: data
                    })
                }).catch((err) => {state.errors.push(err)})
            break;
            case 'LOGINUSER':
                axios.post('http://localhost:3001/login', action.payload)
                .then(res => res.data)
                .then(data =>{
                    return({
                        ...state,
                        user: data
                    })
                }).catch((err) => {state.errors.push(err)})
            break;
            case 'POSTMESSAGE':
            
            break;
        default:
            return state
    }
};

export default reducer