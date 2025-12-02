import { AuthContext, useAuth } from "./AuthContext";

const Dashboard = () => {

    const auth = useAuth();

    console.log(auth);

    return(<div>
        

    </div>)


}

export default Dashboard;