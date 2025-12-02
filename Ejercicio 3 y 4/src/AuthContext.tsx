import { createContext } from "react"
import { AuthProviderProps, AuthUser } from "./types";


export const AuthContext = createContext<AuthUser>({
    id: Date.now(),
    name: "",
    role: "user"
});

const AuthContextProvider = ({ children }: AuthProviderProps) => {





    return(<AuthContext.Provider value={{}}>
        { children }
    </AuthContext.Provider>)

}

export default AuthContextProvider;