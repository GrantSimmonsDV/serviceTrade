const express = require("express");
const auth = require("./controller/Auth")

//Create an express app.
const app = express();

app.use(express.json());

//api endpoints
//Login
app.post("/login", auth.login);

//Chat
//Navbar
//Profile
//Trading

const PORT = 5040;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
