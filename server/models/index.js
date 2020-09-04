var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      const queryString = 'SELECT * FROM messages;';
      db.query(queryString, (e, results) => {
        if (e) {
          // eslint-disable-next-line
          console.error(e);
        } else {
          callback(e, results);
        }
      });
    }, // a function which produces all the messages //여기서 쿼리를 날리고 results
    post: function (callback, params) {
      const queryString =
        'INSERT INTO messages (username,text,roomname) VALUES (?,?,?);';
      db.query(queryString, params, (e, results) =>
        // eslint-disable-next-line
        e ? console.error(e) : callback(results),
      );
    }, // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      const queryString = 'SLEECT * FROM users;';
      db.query(queryString, (e, results) =>
        // eslint-disable-next-line
        e ? console.error(e) : callback(results),
      );
    },
    post: function (callback, inputUsername) {
      const queryString = 'INSERT INTO users(username) VALUES(?)';
      db.query(queryString, [inputUsername], (e, results) =>
        // eslint-disable-next-line
        e ? console.error(e) : callback(results),
      );
    },
  },
};
