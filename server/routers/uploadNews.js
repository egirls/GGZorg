const express = require('express');
const router = express.Router();

const uploadNews = require('../dbs/uploadNews');

router.post('/submitANews', (req, res)=> {

  uploadNews(req, (result)=> {

    res.send(result);
  });
});

module.exports = router;