import { useState } from 'react';
import './Login.css'

export const Login = () => {

    const [nombre, setNombre] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre === "") {
            setError(true);
            return
        }
        setError(false);
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <h1>Ingrese su Nombre para continuar...</h1>
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