//Profile
//Display information and skills of the user.
// Access to Navbar
//Router Links #23
// User can add profile picture
// Can type in name
// Can type in city
// Can select offered services by given categories (4)
// Can select needed services by given categories (4)
// Can type in specific skills for selected offered services category
// Can type in specific skills for selected needed services category
// Can check box to notify they're flexible on trades
// User can click Save for profile input
// PUT request to create user's profile data in database
// User can update profile and click Save Changes
//PUT request to update profile data

import React, { useState } from "react";
import axios from "axios";
import "./Profile.css";

export default function Profile() {
  const [fullName, setFullName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");


  const handleClick = (e) => {
  //update profile data
  axios
    .put("/profile/:id", { fullName, profilePic, city, state })
    .then((res) => {
      
    });
  };



  return (
    <div className="profile">
      <h2>Profile comp</h2>
      <label>
        Full Name
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </label>

      <label id="uploadBtn">
        Choose Photo
        <img src="profile-silhouette.jpeg" id="photo" />
        <input
          type="file"
          id="file"
          alt="Profile Picture"
          src={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
      </label>

      <label>
        City
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label>
        State
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </label>
      <button onClick={handleClick} className="save_profileBtn">Save Profile</button>
    </div>
  );
}
