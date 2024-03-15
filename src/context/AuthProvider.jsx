import { createContext, useState } from "react";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(true)
    const [auth, setAuth] = useState({})

    return (
        <AuthContext.Provider value={{ sidebar, setSidebar, auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext