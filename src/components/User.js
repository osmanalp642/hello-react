import PropTypes from "prop-types";

function User({name,Surname,isLoggedIn,Age,friends,address}) {
    return (
        <>
        <h1>  { 
        isLoggedIn ? `${name} ${Surname} (${Age})`: 'Giriş yapmadınız'
      }</h1>
      {address.title} - {address.zip}
      <br/>
      <br/>

      
     {
        friends.map((friend)=>(
        <div key={friend.id}>{friend.name}</div>))}
     </>
    );
}
User.propTypes={
    name: PropTypes.string.isRequired,
    Surname: PropTypes.string.isRequired,
    Age: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
    isLoggedIn:PropTypes.bool.isRequired,
    friends:PropTypes.array.isRequired,
    address:PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,

    }),
    


};

User.defaultProps = {
    name:'isimsiz',
    isLoggedIn:true
}
export default User;