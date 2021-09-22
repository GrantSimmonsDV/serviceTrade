//Navbar
//Display navigation to other pages on site
// Router Links #23
// Can access Trading page
// Access Chat page
// Access Profile page
// Able to logout
// Is login/logout a CRUD action  *********

function Navbar() {
  return (
    <div className="navbar">
      <h1>serviceTrade</h1>
      <div className="links">
        <a href="/profile">Profile</a>
        <a href="/trading">Trade</a>
        <a href="/chat">Chat</a>
      </div>
    </div>
  );
}

export default Navbar;
