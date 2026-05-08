//Reducer needs two things
//1) Current state of the app
//2) And the action that describes what should happen

const initialState ={count:0};

const counterReducer =(state = initialState, action) => {

    switch (action.type) {
        case 'INCREMENT':
           return {count: state.count + 1};
           
        case 'DECREMENT':
            return {count: state.count - 1};
    
        default:
            return state;
    }


};

export default counterReducer;