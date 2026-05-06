import { useNavigate } from "react-router-dom";

function Contact(){

    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">

    <h2 className="text-3xl font-bold  text-amber-700 ">Contact Page</h2>
    <p className="text-gray-500 mt-4 text-lg">Welcome to the contact page!</p>

    <button className="text-blue-700" onClick={()=> navigate('/')}>Go To home page...</button>
        </div>
        
    )
}

export default Contact;