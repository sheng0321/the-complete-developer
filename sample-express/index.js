import {routeHello, routeAPINames} from './routes.js';
import express from "express";

const server = express();
const port = 3000;
//create a route
server.get('/hello', function(req,res){
    const response = routeHello(req,res);
    res.send(response);
})

server.get("/api/names", async function(req,res){
    let response;
    try {
        response = await routeAPINames(req,res);
    }catch(err){
        console.log(err);
    }
    res.send(response);
})

server.listen(port,function(){
    console.log('Listen on '+ port);
});
