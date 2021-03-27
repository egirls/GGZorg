const express = require('express');
const markdown = require('markdown-js');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const paperContent = require('../dbs/paperContent');

router.get('/getPaperContent', (req, res)=> {

  paperContent(req, (result)=> {
    if (result.isExist) {
      const paperPath = path.resolve('./server/docs/papers/文件.md')
      // 读取文件内容
      fs.readFile(paperPath, 'utf8', (err, data) => {
      if (err) throw err;
      // 将文档内容转化为HTML格式
      const html = markdown.makeHtml(data);

      res.send(html)  
      res.end(); 
      });
    }else{
      res.send('未找到文件')  
      res.end(); 
    }
  });
});

module.exports = router;