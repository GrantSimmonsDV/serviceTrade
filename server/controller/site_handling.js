
module.exports = {

    //CHAT
  createMsg: async (req, res) => {

    const db = req.app.get("db");
    const { message_text } = req.body;
    await db.create_msg([message_text])
    // message_id++
    res.status(200).send("new message created")

  },
  getChatHist: (req, res) => {

  },
  
  //PROFILE 
  createProfile: async (req, res) => {
    const db = req.app.get("db")
    
    const { full_name, city, state, flexible_trade, offered_service_id_1, offered_service_id_2, offered_service_id_3, offered_service_id_4, needed_service_id_1, needed_service_id_2, needed_service_id_3, needed_service_id_4 } = req.body;
    
    await db.create_profile([full_name, city, state, flexible_trade, offered_service_id_1, offered_service_id_2, offered_service_id_3, offered_service_id_4, needed_service_id_1, needed_service_id_2, needed_service_id_3, needed_service_id_4])

    //Error handling if any fields are blank for fullname or city and at least one offered service. If no needed services then flexible trade needs to be marked.

    res.status(200).send("Profile created")
  },
  
  
  updateProfile: (req, res) => {

  },

  //TRADING 
  createChat: async (req, res) => {
    const db = req.app.get("db");
    const { user_id_1, user_id_2 } = req.body;
    await db.create_chat.sql([user_id_1, user_id_2])
    res.status(200).send("New chat created")
  },
};
