import { useState } from 'react';
import Style from './Login.module.css'

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
        <section className={Style.container}>
            <form className={Style.form} onSubmit={handleSubmit}>
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

                {error && <p>Olvidaste escribir tu nombre.</p>}
            </form>
        </section>
    )
}

export default Login;