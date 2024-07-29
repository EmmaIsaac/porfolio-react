import Login from '../../components/Login/Login';
import Profile from '../../components/Profile/Profile'
import { useState } from 'react';
import './Home.css'

const Home = () => {

    const [user, setUser] = useState([]);

    return (
        <>
            {
                user.length == 0
                    ? <Login setUser={setUser} />
                    : <Profile user={user} setUser={setUser} />

            }

        </>
    )
}

export default Home;