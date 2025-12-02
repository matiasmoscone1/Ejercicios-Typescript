import { AuthContext, useAuth } from "./AuthContext";
import { useState } from "react";


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
        <input placeholder="Password" type="text" onChange={(e) => {
            setState((prev) => ({...prev, password: e.target.value}))
        }}/>

        <button onClick={() => auth?.login(state.username, state.password)}>Log In</button>

    </div>)

}

export default Login;