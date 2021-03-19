const cn = require('./connect');

function signIn(req, callback) {
  let flag;
  // callback(true);

  cn.MongoClient.connect(cn.url, (err, client)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {
      //client参数就是连接成功之后的mongoclient
      const db = client.db("GGZorg");

      const collection = db.collection('users');

      collection.find({userId: req.body.userId}).count((err, result)=> {

        if (result > 0) {
          flag = false;
          callback(flag);
        }
        else {
          collection.insertOne({
            userId: req.body.userId,
            userPassword: req.body.userPassword,
            userName: req.body.userName
          }, (err)=> {
            flag = true;
            callback(flag);
          });

        }
      });

    }
  });
}

module.exports = signIn;