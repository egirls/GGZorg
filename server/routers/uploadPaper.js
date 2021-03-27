const express = require('express');
const router = express.Router();

const uploadPaper = require('../dbs/uploadPaper');

router.post('/submitPaperUpload', (req, res)=> {

  uploadPaper(req, (result)=> {

    res.send(result);
  });
});

module.exports = router;