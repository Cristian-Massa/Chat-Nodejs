import { Link } from "react-router-dom"
const Register = () =>{
    return(
        <div>
            <form>
                <label>Usuario:</label>
                <input placeholder="Josema123" />
                
                <label>Email:</label>
                <input type="email" placeholder="dsadasd" />

                <label>Contrasena:</label>
                <input type="password" placeholder="dsadasd" />
                
                <label>Repetir contrasena:</label>
                <input type="password" placeholder="dsadasd" />
            </form>
            <button>Registrar</button>
            <Link to='/login'>Ya estas registrado? Haz click</Link>
        </div>
    )
}

export default Register