import { AuthContext, useAuth } from "./AuthContext";
import CreateUser from "./CreateUser";

const Dashboard = () => {

    const auth = useAuth();

    console.log(auth);
    if(auth?.user?.name === "user"){
        console.log(`DESDE EL DASHBOARD: \nID: ${auth.user.id}\nNAME: ${auth.user.name}\nROLE: ${auth.user.role}`);
    }



    return(<div>
        {auth?.isLogged ? <div>
            <h2>Usuario {auth?.user?.name} logueado!!!</h2>
            <table border={1} style={{borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {auth?.apiUsers?.map((user) => {
                        return(<tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td><button onClick={() => auth?.deleteUser(user.id)}>Editar</button></td>
                            <td><button>Eliminar</button></td>
                        </tr>)
                    })}
                </tbody>
            </table>

            <button onClick={() => auth?.logout()}>Log Out</button>
        {auth?.isLoading ? <div className="loading">
            <h3>Cargando...</h3>
        </div>
        : <></>}

        <CreateUser />

        </div>
        : <></>}

    </div>)


}

export default Dashboard;