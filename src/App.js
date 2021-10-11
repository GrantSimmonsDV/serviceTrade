import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Trading from "./components/trading/Trading";
import Chat from "./components/chat/Chat";
import Profile from "./components/profile/Profile";

function App() {
  const [userId, setUserId] = useState(null);

  //Save the user's id to state to pass down to children components
  const handleUserId = (userId) => {
    setUserId(userId);
  };

  return ( 
    <Router>
      <div className="App">
        <Navbar userId={userId} handleUserId={handleUserId} />
        <div className="content">
          <Switch>
            <Route
              path="/login"
              render={(props) => (
                <Login {...props} handleUserId={handleUserId} />
              )}
            />
            <Route path="/register" component={Register} />
            <Route path="/trading">
              <Trading userId={userId}/>
            </Route>
            <Route path="/chat">
              <Chat userId={userId}/>
            </Route>
            <Route
              path="/profile"
              render={(props) => <Profile {...props} userId={userId} />}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
