import { useState } from "react";
// import { useContext } from "react";
import { UserContext } from "./UserContext";

// export const useUser = () => useContext(UserContext);
// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {

    const [user, setUser] = useState([]);

    const updateUser = (nombre) => {
        setUser(nombre);
    }

    // const showname = () => {
    //     return "Hi " + user;
    // }


    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;