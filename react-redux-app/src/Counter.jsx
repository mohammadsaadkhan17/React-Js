import {useDispatch, useSelector} from "react-redux";
import counterReducer from "./store/reducers/counterReducer";
import { decrement, increment } from "./store/actions/action";
const Counter =()=>{


    const count = useSelector((state=> state.counter.count));
    const dispatch = useDispatch()
    return(
    
        <div>

    <h2>This is Counter:{count} </h2>

    <button onClick={()=> dispatch(increment())}>Increment</button>
    <button onClick={()=> dispatch(decrement())}>Decrement</button>
        </div>
    );



};

export default Counter;