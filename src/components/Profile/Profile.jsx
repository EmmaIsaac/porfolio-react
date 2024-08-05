import Layout from '../Layout/Layout';
import Bio from '../Bio/Bio';
import About from '../About/About';
import Works from '../Works/Works';
import Abilities from '../Abilities/Abilities';
import { Projects } from '../Projects/Projects';
import './Profile.css'


const Profile = () => {

    return (

        <Layout>
            <Bio />
            <About />
            <Works />
            <Abilities />
            <Projects />
        </Layout>

    )
}

export default Profile;