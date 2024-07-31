import Layout from '../Layout/Layout'
import './Contact.css'

const Contact = () => {
    return (

        <Layout>
            <section>
                <h1>Este es el Formulario...</h1>
                <form>
                    <label>
                        Nombre:
                        <input type="text" />
                    </label>
                </form>
            </section>

        </Layout>

    )
}

export default Contact;