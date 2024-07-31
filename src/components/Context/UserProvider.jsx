import { useState, useContext } from "react";
import { UserContext } from "./UserContext";

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext);
// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {

    const [user, setUser] = useState([]);

    const updateUser = (nombre) => {
        setUser(nombre);
    }

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;