const cn = require('./connect');

function uploadNews(req, callback) {
  let flag;
  // callback(true);

  cn.MongoClient.connect(cn.url, (err, client)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {
      //client参数就是连接成功之后的mongoclient
      const db = client.db("GGZorg");

      const collection = db.collection('news');

      const ANewsId = new Date().getTime();
      const ANewsPath = '/server/docs/news/'+req.body.ANewsTitle+'.md'

      collection.find({ANewsId: ANewsId}).count((err, result)=> {

        if (result > 0) {
          flag = false;
          callback(flag);
        }
        else {
          collection.insertOne({
            ANewsId: ANewsId,
            ANewsAuthor: req.body.ANewsAuthor,
            ANewsTitle: req.body.ANewsTitle,
            ANewsText: req.body.ANewsText,
            ANewsPath: ANewsPath
          }, (err)=> {
            flag = true;
            callback(flag);
          });

        }
      });

    }
  });
}

module.exports = uploadNews;