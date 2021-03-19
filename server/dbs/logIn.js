const cn = require('./connect');

function logIn(req, callback) {
  let isMatch;
  let userMes;

  cn.MongoClient.connect(cn.url, (err, client)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {

      const db = client.db("GGZorg");

      const collection = db.collection('users');

      collection.find({'userId': req.body.userId}).toArray((err, result)=> {
        isMatch = false;
        if (result.length > 0 && result[0].userPassword == req.body.userPassword) {
          isMatch = true;
          userMes = {userName: result[0].userName, userId: result[0].userId};
        }
        callback({isMatch, userMes});
      });

    }
  });
}

module.exports = logIn;