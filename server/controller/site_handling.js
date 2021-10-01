module.exports = {
  //CHAT
  createMsg: async (req, res) => {
    const db = req.app.get("db");
    const { message_text } = req.body;
    await db.Messages.create_msg([message_text]);

    res.status(200).send("Welcome");
  },

  getChatHist: async (req, res) => {
    const db = req.app.get("db");
    const { user_id_1 } = req.body;
    const getChat = await db.Chat.get_chat([user_id_1]);

    res.status(200).send(getChat);
  },

  getMessages: async (req, res) => {
    const db = req.app.get("db");
    const { chat_id } = req.params;
    const getMsg = await db.Messages.get_messages([chat_id]);

    res.status(200).send(getMsg);
  },

  //PROFILE

  offeredServices: async (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.params;
    const { service_category, service_define, service_image } = req.body;

    const offeredLimit = await db.Offered_Services.offered_limit([user_id]);

    let limit = 0;

    offeredLimit.map(() => {
      limit++;
    });
   
    if (limit < 3) {
      await db.Offered_Services.initial_offered_services([
        user_id,
        service_category,
        service_define,
        service_image,
      ]);
      //   If i need to i can grab all of them, make a query here
      const allOfferedServices = await db.Offered_Services.offered_limit([user_id]);
      return res.status(200).send(allOfferedServices);
    } else {
      return res.status(404).send("The Limit has been hit");
    }
  },

  neededServices: async (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.params;
    const { service_category, service_define, service_image } = req.body;

    const neededLimit = await db.limits.Needed_Services.needed_limit([user_id]);

    let limit = 0;

    neededLimit.map(() => {
      limit++;
    });
   
    if (limit < 3) {
      await db.Needed_Services.initial_needed_services([
        user_id,
        service_category,
        service_define,
        service_image,
      ]);
      //   If i need to i can grab all of them, make a query here
      const allNeededServices = await db.Needed_Services.needed_limit([user_id]);
      return res.status(200).send(allNeededServices);
    } else {
      return res.status(404).send("Limit has been hit");
    }
  },

  updateOfferedServices: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { service_category, service_define, service_image } = req.body;

    // const neededLimit = 
    await db.Offered_Services.update_offered_services([id, service_category, service_define, service_image]);

      //   If i need to i can grab all of them, make a query here
      const allOfferedUpdate = await db.Offered_Services.all_offered_update([id]);
      return res.status(200).send(allOfferedUpdate);
  
  },

  updateNeededServices: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { service_category, service_define, service_image } = req.body;

    // const neededLimit = 
    await db.Needed_Services.update_needed_services([id, service_category, service_define, service_image]);

      //   If i need to i can grab all of them, make a query here
      const allNeededUpdate = await db.Needed_Services.all_needed_update([id]);
      return res.status(200).send(allNeededUpdate);
  
  },

  deleteOfferedServices: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    await db.Offered_Services.delete_offered_service([id]);
    
    res.status(200).send("Item has been deleted");
  },

  deleteNeededServices: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    await db.Needed_Services.delete_needed_service([id]);
    
    res.status(200).send("Item has been deleted");
  },


  updateProfile: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { full_name, profile_pic, city, state } = req.body;

    const updateId = await db.Users.update_profile_by_id([
      id,
      full_name,
      profile_pic,
      city,
      state,
    ]);

    //Error handling if any fields are blank for fullname or city and at least one offered service. If no needed services then flexible trade needs to be marked.

    res.status(200).send(updateId);
  },

  deleteProfile: async (req, res) => {
    const db = req.app.get("db");

    const { id } = req.params;

    await db.Users.delete_profile([id]);
    // console.log(deleteId)
    res.status(200).send("Item has been deleted");
  },

  //TRADING
  createChat: async (req, res) => {
    const db = req.app.get("db");
    const { user_id_1, user_id_2 } = req.body;
    await db.Chat.create_chat([user_id_1, user_id_2]);
    res.status(200).send("New chat created");
  },
};

//if statement

//error handling to check for creating duplicate chats for those that already exist

//--------------------------

//Graveyard

//ORIGINAL UPDATE_PROFILE

// updateProfile: async (req, res) => {
//     const db = req.app.get("db")
//     const {id} = req.params
//     const { full_name, city, state, flexible_trade, offered_service_id_1, offered_service_id_2, offered_service_id_3, offered_service_id_4, needed_service_id_1, needed_service_id_2, needed_service_id_3, needed_service_id_4 } = req.body;

//     const updateId = await db.update_profile_by_id([id, city, state, flexible_trade, offered_service_id_1, offered_service_id_2, offered_service_id_3, offered_service_id_4, needed_service_id_1, needed_service_id_2, needed_service_id_3, needed_service_id_4, full_name])

//     //Error handling if any fields are blank for fullname or city and at least one offered service. If no needed services then flexible trade needs to be marked.

//     res.status(200).send(updateId)
// },
