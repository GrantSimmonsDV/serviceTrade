import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Trading from "./components/trading/Trading";
import Chat from "./components/chat/Chat";

function App() {
  return (
    
    <Router>
    
      <div className="App">
        <Navbar />
        <div className="content">
          //App components - react-router-dom
          <Switch>
          <Route path="/login">
              <Login />
            </Route>
          <Route path="/register">
              <Register />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/trading">
              <Trading />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
          </Switch>
        </div>
      </div>
    
    </Router>
  );
}

export default App;
