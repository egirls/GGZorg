const express = require('express');
const router = express.Router();

const paperContent = require('../dbs/paperContent');

router.post('/getPaperContent', (req, res)=> {

  paperContent(req, (result)=> {
    res.send(result)  
  });

});

module.exports = router;