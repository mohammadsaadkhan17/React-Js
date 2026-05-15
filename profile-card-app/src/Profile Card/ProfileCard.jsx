function ProfileCard({name, bio, image}){


    return(
        <div className="card">

        <img src={image} alt="photo" />
        <h2>{name}</h2>
       
        <p>{bio}</p>

        </div>
    );
}

export default ProfileCard;