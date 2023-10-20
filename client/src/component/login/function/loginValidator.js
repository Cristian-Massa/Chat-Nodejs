import axios from 'axios'

function validator (data){
    let error
    axios.post('/validate/login', data)
        .then(res => res.data)
        .then(data =>{
            error = data
        })
        .catch(err => error = ['Tiempo de espera sobrepasado intentelo devuelta.'])
        return error
}


export default validator