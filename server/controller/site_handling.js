const messages = [];
let id = 0;

module.exports = {

    //Chat
  createMsg: (req, res) => {
    const {text, time } = req.body;
    messages.push({id, text, time});
    id++
    res.status(200).send(messages)
  },
  getChatHist: (req, res) => {
    
  },
  
  //Profile
  createProfile: (req, res) => {

  },
  updateProfile: (req, res) => {

  },

  //Trading
  createChat: (req, res) => {

  },
};
