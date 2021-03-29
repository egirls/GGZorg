const express = require('express');
const router = express.Router();

const getAllPapers = require('../dbs/getAllPapers');

router.get('/getAllPapers', (req, res)=> {

  getAllPapers(req, (result)=> {
    res.send(result)  
    res.end(); 
  });

});

module.exports = router;