import Layout from '../Layout/Layout'
import './Contact.css'

// eslint-disable-next-line react/prop-types
const Contact = ({ user }) => {
    return (

        <Layout>
            <h1>Este es el Formulario...</h1>
            {user}
        </Layout>

    )
}

export default Contact;