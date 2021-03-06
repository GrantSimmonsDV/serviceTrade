module.exports = {
  //********* USERS **********

  register: async (req, res) => {
    const db = req.app.get("db");
    const { email, password } = req.body;

    await db.Users.new_account([email, password]);

    //Error handling goes here if adding.

    res.status(200).send("Successfully registered, now login");
  },


  login: async (req, res) => {
    //accessing what we declared in index.js
    const db = req.app.get("db");
    //keys called email and password from frontend
    const { email, password } = req.body;
    //verify email is in db
    const [userData] = await db.Users.get_user_by_email([email]);

    //verify password goes with specific email in db
    if (userData.email === email) {
      if (userData.password === password) {
        res.status(200).send(userData);
      } else {
        return res.status(200).send("Email or password is incorrect");
      }
    } else {
      res.status(200).send("Email or password is incorrect");
    }
  },


  logout: async (req, res) => {
    res.status(200).send("Successfully logged out");
  },
};
