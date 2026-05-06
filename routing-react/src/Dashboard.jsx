import { useNavigate } from "react-router-dom";

function Dashboard(){

    const navigate = useNavigate();
    const handleLogout =()=>{

        navigate("/");

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">

    <h2 className="text-3xl font-bold  text-amber-700 ">Dashboard Page</h2>
    <p className="text-gray-500 mt-4 text-lg">Welcome to the dashboard page!</p>

     <button className="text-blue-400 mt- 4 text-lg bg-amber-400 " onClick={handleLogout}>Logout</button>
        
        </div>
        
    )
}

export default Dashboard;