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
import "./Navbar.css";

//This function simply resets the user id to null with the passed down handleUserId function, alerts user with logout response message from the backend and takes the user back to the login page.
function Navbar(props) {
  const handleClick = () => {
    axios.delete("/logout").then((res) => {
      props.handleUserId(null);
      alert(res.data);
      window.location.pathname = "/login";
    });
    // //used for 404 errors, or network errors
    // .catch((error) => {
    //   console.log(error)
    // })
  };

  return (
    <div className="navbar">
      <h1>serviceTrade &#10562;</h1>
      <div className="links">
        
        {/* This sets a condition that if the passed down user id is null then display the Login and Regsiter links in the navbar, or if the user id passed down has an id value then display the Trading, Chat, Profile, and Logout links in the navbar */}
        {/* {!props.userId && (<> <Link to="/login">Login</Link> </>)}
        {!props.userId && (<> <Link to="/register">Register</Link> </>)}
        {props.userId && (<> <Link to="/trading">Trading</Link> </>)}
        {props.userId && (<> <Link to="/chat">Chat</Link> </>)}
        {props.userId && (<> <Link to="/profile">Profile</Link> </>)}
        {props.userId && (<>  <button onClick={handleClick} className="logout_button">Logout</button> </>)}
          */}

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
        {props.user_id_1 && (
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
