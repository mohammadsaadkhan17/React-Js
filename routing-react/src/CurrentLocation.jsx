import { useLocation } from "react-router-dom";

const CurrentLocation =()=>{

    const location = useLocation();
    return(
        <h2>Current path:{location.pathname}</h2>
    )
};

export default CurrentLocation;