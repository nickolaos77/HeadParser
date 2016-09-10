var express = require('express');
var app = express();
var useragent = require('express-useragent');
var PORT = process.env.PORT || 3000;

app.use(useragent.express());
app.get('/', function(req, res){
    res.send(req.useragent);
});

app.listen(PORT, function(){
    console.log('Express listening on port '+ PORT + '!');
});