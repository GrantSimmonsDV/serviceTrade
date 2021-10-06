const express = require("express");
const auth = require("./controller/auth");
const siteHandling = require("./controller/site_handling");
const massive = require("massive");
require('dotenv').config();
const { CONNECTION_STRING, SERVER_PORT } = process.env;

//Create an express app
const app = express(); 

app.use(express.json());

//********* API ENDPOINTS **********

//Register
app.post("/register", auth.register)
//Login
app.post("/login", auth.login);
//Logout
app.delete("/logout", auth.logout)

//Chat
app.post("/chat", siteHandling.createMsg);
app.get("/chat", siteHandling.getChatHist);
app.get("/chat/:chat_id", siteHandling.getMessages)

//Profile
app.get("/profile/offered/:user_id", siteHandling.getOfferedServices)
app.get("/profile/needed/:user_id", siteHandling.getNeededServices )

app.post("/profile/offered/:user_id", siteHandling.offeredServices);
app.post("/profile/needed/:user_id", siteHandling.neededServices);

app.put("/profile/offered/update/:id", siteHandling.updateOfferedServices);
app.put("/profile/needed/update/:id", siteHandling.updateNeededServices);

app.delete("/profile/offered/delete/:id", siteHandling.deleteOfferedServices);
app.delete("/profile/needed/delete/:id", siteHandling.deleteNeededServices);

app.put("/profile/:id", siteHandling.updateProfile);
app.delete("/profile/:id", siteHandling.deleteProfile);

//Trading
app.get()
app.post("/trading", siteHandling.createChat);


//********* Connecting to db with MASSIVE *********

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
}).then((dbInstance) => {
  app.set("db", dbInstance);
  console.log("db connected");
});

//********* SERVER *********

app.listen(SERVER_PORT, () => {
  console.log(`Server running on ${SERVER_PORT}`);
});
