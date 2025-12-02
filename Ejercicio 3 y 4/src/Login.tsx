import { AuthContext, useAuth } from "./AuthContext";
import { useState } from "react";

const arrUser = ["user", "1234"];
const Login = () => {

    const auth = useAuth();

    const [state, setState] = useState({
        username: "",
        password: ""
    });




    return(<div>
        <input placeholder="Username" type="text" onChange={(e) => {
            setState((prev) => ({...prev, username: e.target.value}))
        }}/>
        <input placeholder="Password" type="password" onChange={(e) => {
            setState((prev) => ({...prev, password: e.target.value}))
        }}/>

    </div>)

}

export default Login;