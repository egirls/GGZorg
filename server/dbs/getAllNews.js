const cn = require('./connect');

function getAllNews(req, callback) {
  let news;
  let isSuccess = false;

  cn.MongoClient.connect(cn.url, (err, client)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {

      const db = client.db("GGZorg");

      const collection = db.collection('news');

      collection.find({}).toArray((err, result)=> {
        isSuccess = true
        news = result
        callback({isSuccess,news});
      });

    }
  });
}

module.exports = getAllNews