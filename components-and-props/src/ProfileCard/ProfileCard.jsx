
// import PropTypes from 'prop-types'
//We are passing the props dynamically

//Without destructuring, using dot notation
// function ProfileCard(props){

//     return(

//         <div>

//             <h4>Name:{props.name} </h4>
//             <h4>Age:{props.age} </h4>
//             <h4>Status:{props.isMember ? "Active User" : "Not Active User"} </h4>
//         </div>

//     )
// }


//Using destructuring
function ProfileCard({name, age, isMember, hobbies, onHobbyClick}){

    return(
        <div>

         <h4>Name:{name}</h4>
         <h4>Age:{age}</h4>
         <h4>Status:{isMember ? "Active User" : "Not Active User"}</h4>

         <h4>Hobbies</h4>
         <ul>
            {hobbies.map((hoby, index)=>{
                return <li key={index} onClick={()=> onHobbyClick(hoby)}>{hoby}</li>
            })}
         </ul>
        </div>
    );
}

// ProfileCard.propTypes = {
//   name: PropTypes.string,
//   age : PropTypes.number,
//   isMember: PropTypes.bool.isRequired,
//   hobbies : arrayyOf(Prototypes.string),
// };

export default ProfileCard;