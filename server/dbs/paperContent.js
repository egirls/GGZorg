const cn = require('./connect');

function paperContent(req, callback) {
  let isMatch;
  let userMes;

  cn.MongoClient.connect(cn.url, (err, client)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {

      const db = client.db("GGZorg");

      const collection = db.collection('users');

      collection.find({'userId': '202071341'}).toArray((err, result)=> {

          isMatch = true;
          userMes = {userName: result[0].userName, userId: result[0].userId};

        callback({isMatch, userMes});
      });

    }
  });
}

module.exports = paperContent;