
//This action tells redux that the state should change in a way that corresponds to the increment action in the reducer
export const increment =() =>({
    type:'INCREMENT' //type is property which describes the action what is happening
});

export const decrement= ()=>({

    type:'DECREMENT'
});