const cn = require('./connect');

function uploadPaper(req, callback) {
  let flag;
  // callback(true);

  cn.MongoClient.connect(cn.url, (err, client)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {
      //client参数就是连接成功之后的mongoclient
      const db = client.db("GGZorg");

      const collection = db.collection('papers');

      collection.find({paperId: req.body.paperId}).count((err, result)=> {

        if (result > 0) {
          flag = false;
          callback(flag);
        }
        else {
          collection.insertOne({
            paperId: req.body.paperId,
            paperAuthor: req.body.paperAuthor,
            paperTitle: req.body.paperTitle,
            paperIntro: req.body.paperIntro,
            paperPath: req.body.paperPath
          }, (err)=> {
            flag = true;
            callback(flag);
          });

        }
      });

    }
  });
}

module.exports = uploadPaper;