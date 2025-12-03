import { useAuth } from "./AuthContext";
import { ApiUser } from "./types";
import { useState } from "react";

const CreateUser = () => {

    const auth = useAuth();

    const [state, setState] = useState<ApiUser>({
        id: Date.now(),
        name: "",
        email: "",
        phone: ""
    });


    return(<div>
        <label>Nombre</label><input placeholder="Nombre" onChange={(e) => {
            setState((prev) => ({...prev, name: e.target.value}))
            }}/>
        <label>Email</label><input placeholder="Email" onChange={(e) => {
            setState((prev) => ({...prev, email: e.target.value}))
            }}/>
        <label>Teléfono</label><input placeholder="teléfono" onChange={(e) => {
            setState((prev) => ({...prev, phone: e.target.value}))
        }}/>
        <button onClick={() => auth?.addUser(state)}>Crear usuario</button>
    </div>)

}

export default CreateUser;

