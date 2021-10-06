module.exports = {
  //********* CHAT **********

  createMsg: async (req, res) => {
    const db = req.app.get("db");
    const { message_text } = req.body;
    const newMsg = await db.Messages.create_msg([message_text]);

    res.status(200).send(newMsg);
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

  //********* PROFILE **********

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

getOfferedServices: async (req, res) => {
  const db = req.app.get("db");
  const {user_id} = req.params;
  const getOfferedServices = await db.Offered_Services.get_all_offered_services([user_id]);

  res.status(200).send(getOfferedServices);
},

getNeededServices: async (req, res) => {
  const db = req.app.get("db");
  const {user_id} = req.params;
  const getNeededServices = await db.Needed_Services.get_all_needed_services([user_id]);

  res.status(200).send(getNeededServices)
},

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

      const allOfferedServices = await db.Offered_Services.offered_limit([
        user_id,
      ]);
      return res.status(200).send(allOfferedServices);
    } else {
      return res.status(404).send("Limit of services has been hit");
    }
  },

  neededServices: async (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.params;
    const { service_category, service_define, service_image } = req.body;
    const neededLimit = await db.Needed_Services.needed_limit([user_id]);

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

      const allNeededServices = await db.Needed_Services.needed_limit([
        user_id,
      ]);
      return res.status(200).send(allNeededServices);
    } else {
      return res.status(404).send("Limit has been hit");
    }
  },

  updateOfferedServices: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { service_category, service_define, service_image } = req.body;
    await db.Offered_Services.update_offered_services([
      id,
      service_category,
      service_define,
      service_image,
    ]);
    //May not need v v v v
    const allOfferedUpdate = await db.Offered_Services.all_offered_update([id]);
    // ^ ^ ^ ^ ^ ^ ^ ^ ^ ^
    return res.status(200).send(allOfferedUpdate);
  },

  updateNeededServices: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { service_category, service_define, service_image } = req.body;
    await db.Needed_Services.update_needed_services([
      id,
      service_category,
      service_define,
      service_image,
    ]);
    //May not need v v v v
    const allNeededUpdate = await db.Needed_Services.all_needed_update([id]);
    // ^ ^ ^ ^ ^ ^ ^ ^ ^ ^
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

  deleteProfile: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    await db.Users.delete_profile([id]);

    res.status(200).send("Account has been deleted");
  },

  //********* TRADING **********

  createChat: async (req, res) => {
    const db = req.app.get("db");
    const { user_id_1, user_id_2 } = req.body;
    await db.Chat.create_chat([user_id_1, user_id_2]);

    res.status(200).send("New chat created");
  },
};

//error handling to check for creating duplicate chats for those that already exist

//--------------------------
