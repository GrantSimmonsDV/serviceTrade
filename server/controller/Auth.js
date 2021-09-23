module.exports = {
    login: (req, res) => {
        //accessing what we declared in index.js
        const db = req.app.get("db")
        //keys called email and password from frontend
        const {email, password} = req.body;

        //verify email is in db
        const email = db.get_user_by_email([email])
        //verify password goes with specific email in db




        //send response 200, etc
    }


}