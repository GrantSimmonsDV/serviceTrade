
module.exports = {

    //Chat
  createMsg: async (req, res) => {

    const db = req.app.get("db");
    const { message_text } = req.body;
    await db.create_msg([message_text])
    // message_id++
    res.status(200).send("new message created")

  },
  getChatHist: (req, res) => {

  },
  
  //Profile
  createProfile: async (req, res) => {
    const db = req.body.get("db")
    const { full_name, city, flexible_trade, offered_service_id_1, offered_service_id_2, offered_service_id_3, offered_service_id_4, needed_service_id_1, needed_service_id_2, needed_service_id_3, needed_service_id_4 } = req.body;
    await db.
  },
  updateProfile: (req, res) => {

  },

  //Trading
  createChat: (req, res) => {

  },
};
