const cn = require('./connect');

function getANews(req, callback) {

  let ANews;
  let isExist;

  cn.MongoClient.connect(cn.url, (err, client)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {

      const db = client.db("GGZorg");

      const collection = db.collection('news');

      collection.find({'ANewsId': req.body.ANewsId}).toArray((err, result)=> {
        isExist = false

        if (result.length > 0) {
          isExist = true
          ANews = {
            ANewsId: result[0].ANewsId, 
            ANewsAuthor: result[0].ANewsAuthor, 
            ANewsTitle: result[0].ANewsTitle, 
            ANewsText: result[0].ANewsText, 
            ANewsPath: result[0].ANewsPath
          };

        }

        callback({isExist,ANews});
      });

    }
  });
}

module.exports = getANews;