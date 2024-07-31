import { useUser } from '../Context/UserProvider';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const { user } = useUser();

    return (
        <header>
            <p>¡Bienvenido {user}!</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;