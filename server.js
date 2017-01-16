var express = require('express');
var app = express();
//var http = require('http').Server(app);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

var server = require('http').createServer(app);

app.use('/peerjs', require('peer').ExpressPeerServer(server, {debug: false}));

server.listen(process.env.PORT);

console.log(process.env.PORT);