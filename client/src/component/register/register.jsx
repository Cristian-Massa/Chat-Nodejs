import { useState } from "react"
import { Link } from "react-router-dom"
import validator from "./function/registerValidator"
const Register = () =>{
    const [user, setUser] = useState({
        user: '',
        password: '',
        confirmpassword: '',
        email: ''
    })
    const [response , setResponse] = useState('')
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
            const userReg = {
                user: user.user,
                password: user.password,
                email: user.email
            }
            axios.post('/register', userReg)
                .then(res => res.data)
                .then(data => {
                    setResponse(data)
                })
                .catch((err) => { setResponse(err)})
        }
    };
    return(
        <div>
            <form>
                <label>Usuario:</label>
                <input placeholder="Josema123" name="user" onChange={formHandler}/>
    
                <label>Email:</label>
                <input type="email" placeholder="ejemplo@gmail.com" name="email" onChange={formHandler}/>

                <label>Contrasena:</label>
                <input type="password" placeholder="********" name="password" onChange={formHandler}/>
    
                <label>Repetir contrasena:</label>
                <input type="password" placeholder="********" name="confirmPassword" onChange={formHandler}/>
            </form>
            <button onClick={formSubmit}>Registrar</button>
            <Link to='/login'>¿Ya estas registrado? Haz click</Link>
        </div>
    )
}

export default Register