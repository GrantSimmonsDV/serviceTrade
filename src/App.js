import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Trading from "./components/trading/Trading";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        //App components - react-router-dom
        <Profile />
        <Trading />
        <Chat />
      </div>
    </div>
  );
}

export default App;
