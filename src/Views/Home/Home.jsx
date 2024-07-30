import { useContext } from 'react';
import Login from '../../components/Login/Login';
import Profile from '../../components/Profile/Profile'

// import { useState } from 'react';


import './Home.css'
import { UserContext } from '../../components/Context/UserContext';

const Home = () => {

    const useUser = () => useContext(UserContext);
    const { user, updateUser } = useUser();

    // const [user, setUser] = useState([]);

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