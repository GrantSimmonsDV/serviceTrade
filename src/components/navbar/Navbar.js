//Navbar
//Display navigation to other pages on site
// Router Links #23
// Can access Trading page
// Access Chat page
// Access Profile page
// Able to logout
// Is login/logout a CRUD action  *********

import {Link} from 'react-router-dom';
import axios from "axios";

function Navbar() {
  return (
    <div className="navbar">
      <h1>serviceTrade</h1>
      <div className="links">
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/trading">Trading</Link>
        <Link to="/chat">Chat</Link>
      </div>
    </div>
  );
}

export default Navbar;
