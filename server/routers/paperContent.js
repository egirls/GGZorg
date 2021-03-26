const express = require('express');
const markdown = require('markdown-js');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const paperContent = require('../dbs/paperContent');

router.get('/getPaperContent', (req, res)=> {

  paperContent(req, (result)=> {

  	const paperPath = path.resolve('./server/docs/papers/文件.md')

  	fs.readFile(paperPath, 'utf8', (err, data) => {
	  if (err) throw err;

  	  const html = markdown.makeHtml(data);

      res.send(html)  
      res.end(); 
	});
  	

  });
});

module.exports = router;