//server.js
const express = require("express");
const history = require('connect-history-api-fallback');
const app = express();

// 路由方法引入
const submitLogin = require('./server/routers/logIn');
const submitSignIn = require('./server/routers/signIn');
const getAllNews = require('./server/routers/getAllNews');
const getANews = require('./server/routers/getANews');
const submitANews = require('./server/routers/uploadNews');
const getAllPapers = require('./server/routers/getAllPapers');
const getPaperContent = require('./server/routers/paperContent');
const submitPaperUpload = require('./server/routers/uploadPaper');

const bodyParser = require('body-parser');

app.use(history());
// 定义静态文件目录
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));

// 路由使用
app.use('/', submitLogin);
app.use('/', submitSignIn);
app.use('/', getAllNews);
app.use('/', getANews);
app.use('/', submitANews);
app.use('/', getAllPapers);
app.use('/', getPaperContent);
app.use('/', submitPaperUpload);

// 端口监听
app.listen(3000,function(){
  console.log("listen 3000!");
});

