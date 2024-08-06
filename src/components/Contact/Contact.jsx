import Layout from '../Layout/Layout'
import Style from './Contact.module.css'

const Contact = () => {
    return (

        <Layout>
            <section className={Style.container}>
                <form className={Style.form}
                    action="https://formsubmit.co/filodidacter@gmail.com"
                    method="POST"
                >
                    <h1>Consultas</h1>
                    <label>
                        Nombre:
                        <input type="text" name='name' required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name='email' required />
                    </label>
                    <label>
                        Mensaje:
                        <textarea name="textarea"></textarea>
                    </label>
                    <button type='submit'>Enviar</button>
                </form>
            </section>

        </Layout>

    )
}

export default Contact;