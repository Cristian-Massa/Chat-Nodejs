import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const Register = () =>{
    const [user, setUser] = useState({
        user: '',
        password: '',
        confirmpassword: '',
        email: ''
    })

    const formHandler = (e) =>{
        const name = e.currentTarget.name
        const value = e.currentTarget.value
    
        setUser({
            ...user,
            [name]: value
        })
    };
    
    useEffect(()=>{
        console.log(user);
    }, [user])

    return(
        <div>
            <form>
                <label>Usuario:</label>
                <input placeholder="Josema123" name="user" onChange={formHandler}/>
                
                <label>Email:</label>
                <input type="email" placeholder="dsadasd" name="email" onChange={formHandler}/>

                <label>Contrasena:</label>
                <input type="password" placeholder="dsadasd" name="password" onChange={formHandler}/>
                
                <label>Repetir contrasena:</label>
                <input type="password" placeholder="dsadasd" name="confirmPassword" onChange={formHandler}/>
            </form>
            <button>Registrar</button>
            <Link to='/login'>Ya estas registrado? Haz click</Link>
        </div>
    )
}

export default Register