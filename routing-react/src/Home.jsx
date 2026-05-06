import { useNavigate } from "react-router-dom";

function Home(){

    const navigate = useNavigate();
    const handleLogin = () =>{

        //We can write the login logic here
        navigate("/dashboard");
        
        //navigate(-1) This will navigate us to the previous page from where we come
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">

    <h2 className="text-3xl font-bold  text-amber-700 ">Home Page</h2>
    <p className="text-gray-500 mt-4 text-lg">Welcome to the home page!</p>

    <button className="text-blue-400 mt- 4 text-lg bg-amber-400 " onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Home;