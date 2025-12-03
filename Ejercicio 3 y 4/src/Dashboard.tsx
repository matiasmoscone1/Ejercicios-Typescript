import { useState } from "react";
import { AuthContext, useAuth } from "./AuthContext";
import CreateUser from "./CreateUser";
import { EditUser } from "./types";

const Dashboard = () => {

    const auth = useAuth();

    const [isEdit, setIsEdit] = useState<EditUser>({
        isEdit: false,
        id: 0,
        name: "",
        email: "",
        phone: ""
    });

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
                            <td><button onClick={() => setIsEdit({isEdit: true, id: user.id, name: user.name, email: user.email, phone: user.phone})}>Editar</button></td>
                            <td><button onClick={() => auth?.deleteUser(user.id)}>Eliminar</button></td>
                        </tr>)
                    })}
                </tbody>
            </table>

            <button onClick={() => auth?.logout()}>Log Out</button>
        {auth?.isLoading ? <div className="loading">
            <h3>Cargando...</h3>
        </div>
        : <></>}

        {isEdit.isEdit 
        ? <div>
            <label>Nombre</label><input placeholder="Nombre" value={isEdit.name} onChange={(e) => {
            setIsEdit((prev) => ({...prev, name: e.target.value}))
            }}/>
            <label>Email</label><input placeholder="Email" value={isEdit.email} onChange={(e) => {
                setIsEdit((prev) => ({...prev, email: e.target.value}))
                }}/>
            <label>Teléfono</label><input placeholder="teléfono" value={isEdit.phone} onChange={(e) => {
                setIsEdit((prev) => ({...prev, phone: e.target.value}))
            }}/>
            <button onClick={() => {auth?.editUser(isEdit); setIsEdit({isEdit: false, id: 0, name: "", email: "", phone: ""})}}>Actualizar usuario</button>
        </div> 
        : <></>}

        <CreateUser />

        </div>
        : <></>}

    </div>)


}

export default Dashboard;