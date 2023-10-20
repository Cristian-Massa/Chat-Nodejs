import { Link } from 'react-router-dom'
import { useState } from 'react';
import { UseRedirect } from '../../hooks/useRedirect';
import validator from './function/loginValidator';
const Login = () =>{
    const [user, setUser] = useState({
        user: '',
        password: ''
    })
    const formHandler = (e) =>{
        const name = e.currentTarget.name
        const value = e.currentTarget.value
    
        setUser({
            ...user,
            [name]: value
        })
    };
    
    const formSubmit = () => {
        const error = validator(user)
        if(!error){
            const userLog = {
                user: user.user,
                password: user.password
            }
            axios.post('/login', userLog)
                .then(res => res.data)
                .then(data => {
                    UseRedirect('/')
                })
                .catch((err) => { setResponse(err)})
        }
    };
    return(
        <div>
            <form>
                <label>Usuario:</label>
                <input placeholder="Josema123" onChange={formHandler}/>
                <label>Contrasena:</label>
                <input type="password" placeholder="********" onChange={formHandler}/>
            </form>
            <button onClick={formSubmit}>Loguear</button>
            <Link to='/register'>No estas registrado? Haz click</Link>
            <Link to='/recoverPassword'>Olvide mi contrasena</Link>
        </div>
    )
};

export default Login