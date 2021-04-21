const express = require('express');
const router = express.Router();

const getAllNews = require('../dbs/getAllNews');

router.get('/getAllNews', (req, res)=> {

  getAllNews(req, (result)=> {
    res.send(result)  
    res.end(); 
  });

});

module.exports = router;