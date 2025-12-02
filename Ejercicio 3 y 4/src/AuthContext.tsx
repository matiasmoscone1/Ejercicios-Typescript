import { createContext, useState } from "react"
import { AuthContextType, AuthProviderProps, AuthUser } from "./types";

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthContextProvider = ({ children }: AuthProviderProps) => {

    const [userState, setUserState] = useState<AuthUser | null>({
        id: Date.now(),
        name: "",
        role: "user"
    });

    const login = () => {

    }

    const logout = () => {
        
    }



    return(<AuthContext.Provider value={{ user: userState, login, logout }}>
        { children }
    </AuthContext.Provider>)

}

export default AuthContextProvider;