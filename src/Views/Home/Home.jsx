// import { useContext } from 'react';
import Login from '../../components/Login/Login';
import Profile from '../../components/Profile/Profile'
import { useUser } from '../../components/Context/UserProvider';
import Seo from '../../components/Seo/Seo';
import './Home.css'

const Home = () => {

    const { user, updateUser } = useUser();

    return (
        <>
            <Seo
                title="Porfolio | Emmanuel Isaac"
                desc="Emmanuel Isaac es un desarrollador web con experiencia en la creación de soluciones digitales innovadoras y funcionales. Desde el diseño y desarrollo de sitios web responsivos hasta la implementación de aplicaciones web interactivas."
                kw="desarrollador, dev, programación, diseño, web, responsivo"
            />

            {
                user.length === 0
                    ? <Login setUser={updateUser} />
                    : <Profile />

            }

        </>
    )
}

export default Home;