import { Link } from 'react-router-dom'
const Login = () =>{
    return(
        <div>
            <form>
                <label>Usuario:</label>
                <input placeholder="Josema123" />
                <label>Contrasena:</label>
                <input type="password" placeholder="dsadasd" />
            </form>
            <button>Loguear</button>
            <Link to='/register'>No estas registrado? Haz click</Link>
            <Link to='/recoverPassword'>Olvide mi contrasena</Link>
        </div>
    )
};

export default Login