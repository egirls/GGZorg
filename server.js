//server.js
const express = require("express");
const app = express();

// 路由方法引入
const submitLogin = require('./server/routers/logIn');
const submitSignIn = require('./server/routers/signIn');

const bodyParser = require('body-parser');

// 定义静态文件目录
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));

// 路由使用
app.use('/', submitLogin);
app.use('/', submitSignIn);

// 端口监听
app.listen(3000,function(){
  console.log("listen 3000!");
});

