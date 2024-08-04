import Layout from '../Layout/Layout';
import Bio from '../Bio/Bio';
import About from '../About/About';
import Works from '../Works/Works';
import './Profile.css'


const Profile = () => {

    return (

        <Layout>
            <Bio />
            <About />
            <Works />
        </Layout>

    )
}

export default Profile;