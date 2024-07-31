// import { useContext } from 'react';
import Login from '../../components/Login/Login';
import Profile from '../../components/Profile/Profile'
import { useUser } from '../../components/Context/UserProvider';
import './Home.css'

const Home = () => {

    const { user, updateUser } = useUser();

    return (
        <>

            {
                user.length === 0
                    ? <Login setUser={updateUser} />
                    : <Profile user={user} setUser={updateUser} />

            }

        </>
    )
}

export default Home;