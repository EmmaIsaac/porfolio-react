import Layout from '../Layout/Layout';
import './Profile.css'

// eslint-disable-next-line react/prop-types, no-unused-vars
const Profile = ({ user, setUser }) => {

    const handleLogout = () => {
        setUser([]);
    }

    return (

        <Layout>
            <h1>Bienvenido a Profile</h1>
            <h2>{user}</h2>
            <button
                onClick={handleLogout}>
                Cerrar Sesion
            </button>
        </Layout>

    )
}

export default Profile;