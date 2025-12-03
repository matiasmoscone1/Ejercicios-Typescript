import { useAuth } from "./AuthContext";
import { NewUser } from "./types";
import { useState } from "react";

const CreateUser = () => {

    const auth = useAuth();

    const [state, setState] = useState<NewUser | null>({
        id: Date.now(),
        name: "",
        email: "",
        telephone: 0
    });


    return(<div>
        <label>Nombre</label><input placeholder="Nombre" />
        <label>Email</label><input placeholder="Email"/>
        <label>Teléfono</label><input placeholder="teléfono"/>
    </div>)

}

export default CreateUser;

