
module.exports = {

    //CHAT
  createMsg: async (req, res) => {

    const db = req.app.get("db");
    const { message_text } = req.body;
    await db.create_msg([message_text])
    
    res.status(200).send("Welcome")
  },

  getChatHist: async (req, res) => {
    const db = req.app.get("db");
    const {user_id_1} = req.body;
    const getChat = await db.get_chat([user_id_1])
    
    res.status(200).send(getChat)
  },

  getMessages: async (req, res) => {
    const db = req.app.get("db");
    const {chat_id} = req.params;
    const getMsg = await db.get_messages([chat_id]);

    res.status(200).send(getMsg) 
  },
  
  //PROFILE 
updateProfile: async (req, res) => {
    const db = req.app.get("db")
    const {id} = req.params
    const { full_name, city, state, flexible_trade, offered_service_id_1, offered_service_id_2, offered_service_id_3, offered_service_id_4, needed_service_id_1, needed_service_id_2, needed_service_id_3, needed_service_id_4 } = req.body;
    
    const updateId = await db.update_profile_by_id([id, city, state, flexible_trade, offered_service_id_1, offered_service_id_2, offered_service_id_3, offered_service_id_4, needed_service_id_1, needed_service_id_2, needed_service_id_3, needed_service_id_4, full_name])
    
    //Error handling if any fields are blank for fullname or city and at least one offered service. If no needed services then flexible trade needs to be marked.
    
    res.status(200).send(updateId)
},

deleteProfile: async (req, res) => {
const db = req.app.get("db")
const{id} = req.params;

const deleteId = await db.delete_profile([id])

res.status(200).send(deleteId)

},

//TRADING 
createChat: async (req, res) => {
    const db = req.app.get("db");
    const { user_id_1, user_id_2 } = req.body;
    await db.create_chat([user_id_1, user_id_2])
    res.status(200).send("New chat created")
  },
};

//if statement 

//error handling to check for creating duplicate chats for those that already exist


