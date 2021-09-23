//Trading
//Display service matches to other users
//(match cards display stock image of the selected offered service category and user profile pic, etc. )
// Access to Navbar
//Router Links #23
// Can review Full and Half matches and click on users card to chat with them to set up a service trade.
//POST request to create/begin chat with other user of the match

import React from "react";
import axios from "axios";

export default function Trading() {

//create/begin chat with other user of the match
axios.post("/trading")
.then((res) => {

})


  return (
    <div className="trading">
      <h2>Trading comp</h2>
    </div>
  );
}
