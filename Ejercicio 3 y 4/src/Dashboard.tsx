import { AuthContext, useAuth } from "./AuthContext";

const Dashboard = () => {

    const auth = useAuth();

    console.log(auth);
    if(auth?.user?.name === "user"){
        console.log(`DESDE EL DASHBOARD: \nID: ${auth.user.id}\nNAME: ${auth.user.name}\nROLE: ${auth.user.role}`);
    }



    return(<div>
        {auth?.isLogged ? <div>
            <h2>Usuario {auth?.user?.name} logueado!!!</h2>
            <button onClick={() => auth?.logout()}>Log Out</button>
        </div>
        : <></>}

    </div>)


}

export default Dashboard;