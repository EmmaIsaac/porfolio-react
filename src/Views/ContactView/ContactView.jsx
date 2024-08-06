import Contact from "../../components/Contact/Contact";
import { useUser } from "../../components/Context/UserProvider";
import Login from "../../components/Login/Login";
import Seo from "../../components/Seo/Seo";


const ContactView = () => {

    const { user, updateUser } = useUser();

    return (
        <>
            <Seo
                title="Contacto | Emmanuel Isaac"
                desc="Formulario de contacto para comunicarse con el desarrollador."
                kw="contacto, email"
            />
            {
                user.length === 0
                    ? <Login setUser={updateUser} />
                    : <Contact user={user} />
            }
        </>
    )
}

export default ContactView;