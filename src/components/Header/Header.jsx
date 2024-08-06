import { useUser } from '../Context/UserProvider';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const { user } = useUser();

    return (
        <header>
            <h4>¡Bienvenid@ {user}!</h4>
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