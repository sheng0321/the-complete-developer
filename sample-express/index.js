const express = require("express");
const server = express();
const port = 3000;
//create a route
server.get('/hello', function(req,res){
    res.send('Hello, world!');
})
server.listen(port,function(){
    console.log('Listen on '+ port);
});
