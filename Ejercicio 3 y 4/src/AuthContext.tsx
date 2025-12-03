import { createContext, useState, useContext, useEffect } from "react"
import { ApiUser, AuthContextType, AuthProviderProps, AuthUser, EditUser } from "./types";

export const AuthContext = createContext<AuthContextType | null>(null);
export const useAuth = () => useContext(AuthContext);

const arrUser = ["user", "1234"];

const AuthContextProvider = ({ children }: AuthProviderProps) => {

    const [userState, setUserState] = useState<AuthUser | null>({
        id: 0,
        name: "",
        role: "user"
    });

    const [apiUsers, setApiUsers] = useState<ApiUser[]>([]);

    const [isLogged, setIsLogged] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const login = (username: string, password: string) => {
        if(username === arrUser[0] && password === arrUser[1]){
            setUserState((prev) => ({...prev, id: Date.now(), name: arrUser[0], role: "admin"}))
            setIsLogged(true);
            localStorage.setItem("user", JSON.stringify({username: username}));
            
        }else{
            setIsLogged(false);
            return;
        }
    }

    const logout = () => {
        setIsLogged(false);
        setUserState({id: 0, name: "", role: "user"});
        localStorage.removeItem("user");
    }

    const fetchApi = async () => {
        try{
            setIsLoading(true);
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
                method: "GET",
                headers: {"Content-Type":"application/json"}
            });
            
            if(response.ok){
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
                const data = await response.json();
                let newArray: ApiUser[] = data.map((user: ApiUser) => ({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone
                }))

                setApiUsers(newArray);
            }
        }catch(err){
            console.error("Ocurrió un error en la consulta de los usuarios.");
        }

    }

    const addUser = (user: ApiUser) => {
        setApiUsers((prev) => [...prev, user])
    }

    const deleteUser = (id: number) => {
        setApiUsers(apiUsers.filter((user) => user.id !== id)); 
    }

    const editUser = (user: EditUser) => {
        setApiUsers((prev) => prev.map((u) => {
            return(u.id === user.id 
            ? {...u, name: user.name, email: user.email, phone: user.phone}
            : u
        )}))        
    }

    console.log(apiUsers);

    return(<AuthContext.Provider value={{ user: userState, login, logout, 
    isLogged, apiUsers, setApiUsers, isLoading, fetchApi, addUser, deleteUser, editUser}}>
        { children }
    </AuthContext.Provider>)

}

export default AuthContextProvider;