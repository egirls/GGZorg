const cn = require('./connect');

function paperContent(req, callback) {

  let paperMes;
  let isExist;

  cn.MongoClient.connect(cn.url, (err, client)=> {
    if (err) {
      console.log(err);
      throw err;
    } else {

      const db = client.db("GGZorg");

      const collection = db.collection('papers');

      collection.find({'paperId': req.body.paperId}).toArray((err, result)=> {
        isExist = false
        console.log('paperId',req.body.paperId)
        console.log('result',result)

        if (result.length > 0) {
          isExist = true
          paperMes = {
            paperId: result[0].paperId, 
            paperAuthor: result[0].paperAuthor, 
            paperTitle: result[0].paperTitle, 
            paperIntro: result[0].paperIntro, 
            paperPath: result[0].paperPath
          };

        }

        callback({isExist,paperMes});
      });

    }
  });
}

module.exports = paperContent;