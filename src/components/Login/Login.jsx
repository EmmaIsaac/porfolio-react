import { useState } from 'react';
import './Login.css'

// eslint-disable-next-line react/prop-types
const Login = ({ setUser }) => {

    const [nombre, setNombre] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre === "") {
            setError(true);
            return
        }
        setError(false);
        setUser([nombre]);
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <h2>Ingrese su Nombre para continuar...</h2>
                <label>
                    Nombre:
                    <input
                        type="text"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </label>
                <button type="submit">Ingresar</button>

            </form>
            {error && <p>Olvidaste escribir tu nombre.</p>}
        </div>
    )
}

export default Login;