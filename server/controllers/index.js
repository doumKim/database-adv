var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      const callback = (e, results) =>
        // eslint-disable-next-line
        e ? console.log(e) : res.status(200).json(results);
      models.messages.get(callback);
    }, // a function which handles a get request for all messages  models.messages.get()
    post: function (req, res) {
      const callback = (results) => res.status(201).json(results);
      const { username, text, roomname } = req.body;
      models.messages.post(callback, [username, text, roomname]);
    }, // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      const callback = (results) => res.status(200).json(results);
      models.users.get(callback);
    }, // a function which handles a get request for all users
    post: function (req, res) {
      const callback = (results) => res.status(200).json(results);
      models.users.post(callback, req.body.inputUsername);
    }, // a function which handles posting a user to the database
  },
};
