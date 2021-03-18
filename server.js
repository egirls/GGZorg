//server.js
let express = require("express");
let app = express();

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(3000,function(){
  console.log("listen 3000!");
});

