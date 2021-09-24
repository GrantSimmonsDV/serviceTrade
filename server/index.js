const express = require("express");
const auth = require("./controller/auth");
const siteHandling = require("./controller/site_handling");
const massive = require("massive");
require('dotenv').config();
const { CONNECTION_STRING, SERVER_PORT } = process.env;

//Create an express app.
const app = express();

app.use(express.json());


//api Endpoints
//Login
app.post("/login", auth.login);
//Register
app.post("/register", auth.register)
//Chat
app.get("/chat/:id", siteHandling.getChatHist);
app.post("/chat", siteHandling.createMsg);
//Navbar
//Profile
app.post("/profile", siteHandling.createProfile);
app.put("/profile/:id", siteHandling.updateProfile);
//Trading
app.post("/trading", siteHandling.createChat);


//connecting to db with Massive
massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
}).then((dbInstance) => {
  app.set("db", dbInstance);
  console.log("db connected");
});


app.listen(SERVER_PORT, () => {
  console.log(`Server running on ${SERVER_PORT}`);
});
