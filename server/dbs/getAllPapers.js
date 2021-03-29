const cn = require('./connect');

function getAllPapers(req, callback) {
  let papers;
  let isSuccess = false;

  cn.MongoClient.connect(cn.url, (err, client)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {

      const db = client.db("GGZorg");

      const collection = db.collection('papers');

      collection.find({}).toArray((err, result)=> {
        isSuccess = true
        papers = result
        callback({isSuccess,papers});
      });

    }
  });
}

module.exports = getAllPapers