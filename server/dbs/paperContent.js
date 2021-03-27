const cn = require('./connect');

function paperContent(req, callback) {

  let papers;
  let isExist;

  cn.MongoClient.connect(cn.url, (err, client)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {

      const db = client.db("GGZorg");

      const collection = db.collection('news');

      collection.find({'paperId': req.body.paperId}).toArray((err, result)=> {
        isExist = false

        if (result.length > 0) {
          isExist = true
          papers = {
            paperId: result[0].paperId, 
            paperAuthor: result[0].paperAuthor, 
            paperTitle: result[0].paperTitle, 
            paperIntro: result[0].paperIntro, 
            paperPath: result[0].paperPath
          };

        }

        callback({isExist,papers});
      });

    }
  });
}

module.exports = paperContent;