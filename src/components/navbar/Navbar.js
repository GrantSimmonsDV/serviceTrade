//Navbar
//Display navigation to other pages on site
// Router Links #23
// Can access Trading page
// Access Chat page
// Access Profile page
// Able to logout
// Is login/logout a CRUD action  *********

import { Link } from "react-router-dom";
import axios from "axios";

function Navbar(props) {

  const handleClick = () => {
    axios.delete("/logout") 
    .then((res) => {
        props.handleUserId(null);
        alert(res.data)
        window.location.pathname="/login";
    })
    // //used for 404 errors, or network errors
            // .catch((error) => {
            //   console.log(error)
            // })  
  };

  
  return (
    <div className="navbar">
      <h1>serviceTrade</h1>
      <div className="links">
        {!props.userId && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        {props.userId && (
          <>
        <Link to="/trading">Trading</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/profile">Profile</Link>
        <button onClick={handleClick} className="logout_button">
        Logout
      </button>
        </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
