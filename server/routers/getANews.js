const express = require('express');
const markdown = require('markdown-js');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const getANews = require('../dbs/getANews');

router.post('/getANews', (req, res)=> {

  getANews(req, (result)=> {
    if ('result.isExist') {
      // const aNewsPath = path.resolve('./server/docs/papers/文件.md')
      // // 读取文件内容
      // fs.readFile(aNewsPath, 'utf8', (err, data) => {
      // if (err) throw err;
      // 将文档内容转化为HTML格式
      const data = result.ANews.ANewsText
      const html = markdown.makeHtml(data);

      res.send(html)
      res.end(); 
      // });
    }else{
      res.send('未找到文件')  
      res.end(); 
    }
  });
});

module.exports = router;