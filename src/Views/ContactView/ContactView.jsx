import Contact from "../../components/Contact/Contact";
import { useUser } from "../../components/Context/UserProvider";
import Login from "../../components/Login/Login";


const ContactView = () => {

    const { user, updateUser } = useUser();

    return (
        <>
            {
                user.length === 0
                    ? <Login setUser={updateUser} />
                    : <Contact user={user} />
            }
        </>
    )
}

export default ContactView;