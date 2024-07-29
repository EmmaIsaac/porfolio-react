import './Profile.css'

// eslint-disable-next-line react/prop-types, no-unused-vars
const Profile = ({ user, setUser }) => {

    const handleLogout = () => {
        setUser([]);
    }

    return (
        <>
            <h1>Bienvenido a Profile</h1>
            <h2>{user}</h2>
            <button
                onClick={handleLogout}>
                Cerrar Sesion
            </button>
        </>
    )
}

export default Profile;