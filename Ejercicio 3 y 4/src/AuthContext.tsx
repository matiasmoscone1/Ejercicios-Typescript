import { createContext, useState, useContext } from "react"
import { AuthContextType, AuthProviderProps, AuthUser } from "./types";

export const AuthContext = createContext<AuthContextType | null>(null);
export const useAuth = () => useContext(AuthContext);

const arrUser = ["user", "1234"];

const AuthContextProvider = ({ children }: AuthProviderProps) => {

    const [userState, setUserState] = useState<AuthUser | null>({
        id: 0,
        name: "",
        role: "user"
    });


    const login = (username: string, password: string) => {
        if(username === arrUser[0] && password === arrUser[1]){
            setUserState((prev) => ({...prev, id: Date.now(), name: arrUser[0], role: "admin"}))
        }else{
            return;
        }
    }


    const logout = () => {

    }



    return(<AuthContext.Provider value={{ user: userState, login, logout}}>
        { children }
    </AuthContext.Provider>)

}

export default AuthContextProvider;