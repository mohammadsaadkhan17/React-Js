import React from 'react'

const ChildComponent = React.memo((props) => {
    console.log("Child component got re-rendered");
  return (
    <div>
    
    <button>{props.buttonName}</button>
        
    </div>
  )
})

export default ChildComponent;

//If we wrap our component in React.memo then component re-render tabhi hoga jab
//Props change honge nahi to re-render nhi hoga
