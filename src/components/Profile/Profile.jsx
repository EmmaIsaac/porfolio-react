import Layout from '../Layout/Layout';
import Bio from '../Bio/Bio';
import About from '../About/About';
import Works from '../Works/Works';
import './Profile.css'
import Abilities from '../Abilities/Abilities';


const Profile = () => {

    return (

        <Layout>
            <Bio />
            <About />
            <Works />
            <Abilities />
        </Layout>

    )
}

export default Profile;